const {
  objectType,
  arg,
  nonNull,
  idArg,
  inputObjectType,
  asNexusMethod,
  makeSchema,
  intArg,
} = require('nexus')

const { DateTimeResolver } = require('graphql-scalars')

const DateTime = asNexusMethod(DateTimeResolver, 'date')

/**
 * ? HELPER FUNCTIONS
 */
async function getFollowingUsers(userId, context) {
  const follows = await context.prisma.follows.findMany({
    where: { followedById: userId },
  })

  const followingUsers = await Promise.all(
    follows.map(async (follow) => {
      return context.prisma.user.findUnique({
        where: { id: follow.followingId },
      })
    }),
  )
  return followingUsers
}

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('addUser', {
      type: User,
      args: {
        userCreateInput: arg({ type: nonNull(UserCreateInput) }),
      },
    })
    t.field('createPost', {
      type: Post,
      args: {
        authorId: nonNull(idArg()),
        data: arg({ type: nonNull(PostCreateInput) }),
      },
    })
    t.field('updatePost', {
      type: Post,
      args: {
        postId: nonNull(idArg()),
        data: arg({ type: nonNull(PostCreateInput) }),
      },
    })
  },
})
const Post = objectType({
  name: 'Post',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('body')
    t.nonNull.field('createdAt', { type: 'DateTime' })
    t.nonNull.field('updatedAt', { type: 'DateTime' })
    t.list.nonNull.field('postImages', {
      type: PostImage,
      resolve: (parent, _, context) => {
        return context.prisma.postImage.findMany({
          where: { postId: parent.id },
        })
      },
    })
    t.nonNull.field('author', {
      type: User,
      resolve: (parent, _, context) => {
        return context.prisma.user.findUnique({
          where: { id: parent.authorId },
        })
      },
    })
    t.int('likeCount')
    t.int('repostCount')
    t.int('replyCount')
    t.field('parentPost', {
      type: Post,
      resolve: (parent, _, context) => {
        return context.prisma.post.findUnique({
          where: { id: parent.parentPostId },
        })
      },
    })
    t.list.field('replies', {
      type: Post,
      resolve: (parent, _, context) =>
        context.prisma.post.findMany({
          where: { parentPostId: parent.id },
        }),
    })
  },
})
const PostImage = objectType({
  name: 'PostImage',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('url')
    t.string('caption')
    t.nonNull.field('post', {
      type: Post,
      resolve: (parent, _, context) =>
        context.prisma.post.findUnique({
          where: { id: parent.postId },
        }),
    })
  },
})
const ProfileImage = objectType({
  name: 'ProfileImage',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('url')
    t.field('user', {
      type: User,
      resolve: (parent, _, context) => {
        return context.prisma.user.findUnique({
          where: { id: parent.userId },
        })
      },
    })
  },
})
const Query = objectType({
  name: 'Query',
  definition(t) {
    // Get all users
    t.nonNull.list.nonNull.field('users', {
      type: User,
      resolve: (_parent, _args, context) => {
        return context.prisma.user.findMany()
      },
    })
    // Get a user by id
    t.nullable.field('userById', {
      type: User,
      args: {
        id: intArg(),
      },
      resolve: (_parent, args, context) => {
        return context.prisma.user.findUnique({
          where: { id: args.id || undefined },
        })
      },
    })
    // Get all posts
    t.list.field('posts', {
      type: Post,
      resolve: (_parent, _args, context) => {
        return context.prisma.post.findMany()
      },
    })

    // ? Posts in "FOR YOU" mode
    t.list.field('feedForYou', {
      type: Post,
      resolve: (_parent, _args, context) => {
        return context.prisma.post.findMany({
          include: {
            author: {
              select: {
                id: true,
                username: true,
                fullname: true,
                bio: true,
                profileImage: true,
                followerCount: true,
              },
            },
          },
          orderBy: [{ createdAt: 'desc' }],
        })
      },
    })

    // ? Posts in "FOLLOWING" mode
    t.list.field('feedFollowing', {
      type: Post,
      args: {
        userId: intArg(),
      },
      resolve: async (_, args, context) => {
        if (!args.userId) {
          throw new Error('userId argument is required')
        }
        // Get all the users that the current user with args.id is following
        const followingUsers = await getFollowingUsers(args.userId, context)
        // Create a list of integer contains only the id of the following users
        const ids = followingUsers.map((u) => u.id)
        // Query the post of those following users
        return context.prisma.post.findMany({
          include: {
            author: {
              select: {
                id: true,
                username: true,
                fullname: true,
                bio: true,
                profileImage: true,
                followerCount: true,
              },
            },
          },
          where: {
            author: {
              id: { in: [...ids] },
            },
          },
          orderBy: [{ createdAt: 'desc' }],
        })
      },
    })

    // Get all posts of a user
    t.list.field('postByUser', {
      type: Post,
      args: {
        userId: intArg(),
      },
      resolve: (parent, _args, context) => {
        return context.prisma.post.findMany({
          where: { id: parent.userId || undefined },
        })
      },
    })
    t.nonNull.list.nonNull.field('profileImages', {
      type: ProfileImage,
      resolve: (_parent, _args, context) => {
        return context.prisma.profileImage.findMany()
      },
    })
    t.nonNull.field('userProfileImage', {
      type: ProfileImage,
      resolve: (parent, _args, context) => {
        return context.prisma.profileImage.findUnique({
          where: { id: parent.id || undefined },
        })
      },
    })
  },
})
const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('username')
    t.string('bio')
    t.string('fullname')
    t.nonNull.field('joinedOn', { type: 'DateTime' })
    t.int('followerCount')
    t.int('followingCount')
    t.int('postCount')
    t.list.field('followedBy', {
      type: User,
      resolve: async (parent, _, context) => {
        const follows = await context.prisma.follows.findMany({
          where: { followingId: parent.id },
        })

        // Map the followedBy relation from each Follows object to a User array
        const followedByUsers = await Promise.all(
          follows.map(async (follow) => {
            return context.prisma.user.findUnique({
              where: { id: follow.followedById },
            })
          }),
        )
        return followedByUsers
      },
    })

    t.list.field('following', {
      type: User,
      resolve: async (parent, _, context) => {
        return await getFollowingUsers(parent.id, context)
      },
    })

    t.list.field('posts', {
      type: Post,
      resolve: async (parent, _, context) => {
        return await context.prisma.post.findMany({
          where: { authorId: parent.id },
        })
      },
    })
    t.field('profileImage', {
      type: ProfileImage,
      resolve: (parent, _, context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id },
          })
          .following()
      },
    })
  },
})

const PostCreateInput = inputObjectType({
  name: 'PostCreateInput',
  definition(t) {
    t.nonNull.string('body')
    t.list.field('postImages', { type: PostImageCreateInput })
  },
})
const PostImageCreateInput = inputObjectType({
  name: 'PostImageCreateInput',
  definition(t) {
    t.nonNull.string('url')
    t.string('caption')
  },
})
const ProfileImageCreateInput = inputObjectType({
  name: 'ProfileImageCreateInput',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('url')
  },
})
const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.string('username')
    t.string('bio')
    t.string('fullname')
    t.list.field('profileImage', { type: ProfileImageCreateInput })
    t.list.field('posts', { type: PostCreateInput })
    t.list.field('followers', { type: UserCreateInput })
    t.list.field('following', { type: UserCreateInput })
  },
})

const schema = makeSchema({
  types: [
    Query,
    Mutation,
    User,
    ProfileImage,
    Post,
    PostImage,
    UserCreateInput,
    PostCreateInput,
    ProfileImageCreateInput,
    PostImageCreateInput,
    DateTime,
  ],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  sourceTypes: {
    modules: [{ module: '@prisma/client', alias: 'prisma' }],
  },
})

module.exports = {
  schema: schema,
}
