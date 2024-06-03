const {
  objectType,
  arg,
  nonNull,
  idArg,
  inputObjectType,
  asNexusMethod,
  makeSchema,
  intArg,
  stringArg,
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

// * RESPONSE TYPES FOR MUTATION
const FollowUserResponse = objectType({
  name: 'FollowUserResponse',
  definition(t) {
    // ? Similar to HTTP status code, represents the status of the mutation
    t.nonNull.int('code')
    // ? Indicates whether the mutation was successful
    t.nonNull.boolean('success')
    // ? Human-readable message for the UI
    t.nonNull.string('message')
    // ? Newly updated track after a successful mutation"
    t.field('following', {
      type: 'User',
    })
  },
})

const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    /**
     * * When following a user, 3 actions will be taken
     *    * 1. Add new record to the join table `Follows`
     *    * 2. Update the following user, increase followerCount by 1
     *    * 3. Update the follower user, increase followingCount by 1
     */
    t.field('followUser', {
      type: FollowUserResponse,
      args: {
        followerId: nonNull(intArg()),
        followingId: nonNull(intArg()),
      },
      resolve: async (_, args, context) => {
        // ! Error handing: Prevent user to follow themselves
        if (args.followerId === args.followingId) {
          return {
            code: 404,
            success: false,
            message: 'User cannot follow themselves',
            following: null,
          }
        }

        // Find the user to follow
        const followingUser = await context.prisma.user.findUnique({
          where: {
            id: args.followingId,
          },
        })

        try {
          // ! Invalid following user
          if (!followingUser) {
            const err = new Error('User to follow not found')
            return {
              code: err.code,
              success: false,
              message: err.message,
              following: null,
            }
            // throw new Error('User to follow not found')
          }

          // Add a new row in `Follows` table
          await context.prisma.follows.create({
            data: {
              followedById: args.followerId,
              followingId: args.followingId,
            },
          })

          // Update the following user, increase the follower count to 1
          const following = await context.prisma.user.update({
            where: { id: args.followingId },
            data: { followerCount: { increment: 1 } },
          })

          // Update the follower user, increase the following count to 1
          const follower = await context.prisma.user.update({
            where: { id: args.followerId },
            data: { followingCount: { increment: 1 } },
          })
          return {
            code: 200,
            success: true,
            message: 'Followed successfully!',
            following: following,
          }
        } catch (err) {
          return {
            code: err.extensions.response.status || 404,
            success: false,
            message: err.extensions.response.body,
            following: null,
          }
        }
      },
    })

    /**
     * * When unfollowing a user, 3 actions will be taken
     *    * 1. Remove a record in the join table `Follows`
     *    * 2. Update the following user, decrease followerCount by 1
     *    * 3. Update the follower user, decrease followingCount by 1
     */
    t.field('unfollowUser', {
      type: FollowUserResponse,
      args: {
        followerId: nonNull(intArg()),
        followingId: nonNull(intArg()),
      },
      resolve: async (_, args, context) => {
        // ! Error handing: Prevent user to follow themselves
        if (args.followerId === args.followingId) {
          return {
            code: 404,
            success: false,
            message: 'User cannot unfollow themselves',
            following: null,
          }
        }

        try {
          // Find the user to follow
          const followingUser = await context.prisma.user.findUnique({
            where: {
              id: args.followingId,
            },
          })

          // ! Invalid following user
          if (!followingUser) {
            return {
              code: 404,
              success: false,
              message: 'User to follow not found',
              following: null,
            }
          }

          // Delete a row in `Follows` table
          await context.prisma.follows.delete({
            where: {
              followingId_followedById: {
                followedById: args.followerId,
                followingId: args.followingId,
              },
            },
          })

          // Update the following user, increase the follower count to 1
          const following = await context.prisma.user.update({
            where: { id: args.followingId },
            data: { followerCount: { decrement: 1 } },
          })

          // Update the follower user, increase the following count to 1
          const follower = await context.prisma.user.update({
            where: { id: args.followerId },
            data: { followingCount: { decrement: 1 } },
          })

          return {
            code: 200,
            success: true,
            message: 'Unfollowed Successfully!',
            following: following,
          }
        } catch (err) {
          return {
            code: err.extensions.response.status,
            success: false,
            message: err.extensions.response.body,
            following: null,
          }
        }
      },
    })
  },
})

const Follow = objectType({
  name: 'Follow',
  definition(t) {
    t.nonNull.int('followedById')
    t.nonNull.int('followingId')
    t.nonNull.field('followedBy', {
      type: 'User',
      resolve: (parent, _, context) => {
        return context.prisma.user.findUnique({
          where: { id: parent.followedById },
        })
      },
    })
    t.nonNull.field('following', {
      type: 'User',
      resolve: (parent, _, context) => {
        return context.prisma.user.findUnique({
          where: { id: parent.followingId },
        })
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
    // * Get all users, order by follower count (desc)
    t.nonNull.list.nonNull.field('users', {
      type: User,
      resolve: (_parent, _args, context) => {
        return context.prisma.user.findMany({
          orderBy: [{ followerCount: 'desc' }],
        })
      },
    })

    // * Get all followed-following pair of users
    t.list.nonNull.field('follows', {
      type: Follow,
      resolve: async (_, __, context) => {
        return await context.prisma.follows.findMany()
      },
    })

    // * Get a user by id
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

    // * Get all posts
    t.list.field('posts', {
      type: Post,
      resolve: (_parent, _args, context) => {
        return context.prisma.post.findMany()
      },
    })

    // * Posts in "FOR YOU" mode
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
                profileImage: {
                  include: { user: true },
                },
                followerCount: true,
              },
            },
          },
          orderBy: [{ createdAt: 'desc' }],
        })
      },
    })

    // * Posts in "FOLLOWING" mode
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

    // * Get all posts of a user
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

    // * Get all profile images
    t.nonNull.list.nonNull.field('profileImages', {
      type: ProfileImage,
      resolve: (_parent, _args, context) => {
        return context.prisma.profileImage.findMany()
      },
    })

    // * Get the profile image of a specific user
    t.nonNull.field('userProfileImage', {
      type: ProfileImage,
      resolve: (parent, _args, context) => {
        return context.prisma.profileImage.findUnique({
          where: { id: parent.id || undefined },
        })
      },
    })

    // * Get a user by its username
    t.field('userByUsername', {
      type: User,
      args: {
        username: stringArg(),
      },
      select: {
        id: true,
        fullname: true,
        username: true,
        followerCount: true,
        profileImage: {
          select: {
            url: true,
          },
        },
      },
      resolve: (_, args, context) => {
        return context.prisma.user.findUnique({
          where: {
            username: args.username,
          },
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
        return context.prisma.profileImage.findUnique({
          where: { userId: parent.id },
        })
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
    Follow,
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
