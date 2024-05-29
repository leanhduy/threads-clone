import {
  objectType,
  arg,
  nonNull,
  idArg,
  inputObjectType,
  scalarType,
} from "@nexus/schema";

/**
 * TODO: ADD THE DATETIME scalar field for some of the fields: (Post) createdAt, updatedAt, (User) joinedOn
 * ? Refer to the schema.js file of the graphqo-apollo-prisma-nexus project (D:\source-code\playground\graphql\graphql-apollo-prisma-nexus)
 */

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("addUser", {
      type: User,
      args: {
        userCreateInput: arg({ type: nonNull(UserCreateInput) }),
      },
    });
    t.field("createPost", {
      type: Post,
      args: {
        authorId: nonNull(idArg()),
        data: arg({ type: nonNull(PostCreateInput) }),
      },
    });
    t.field("updatePost", {
      type: Post,
      args: {
        postId: nonNull(idArg()),
        data: arg({ type: nonNull(PostCreateInput) }),
      },
    });
  },
});
const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("body");
    t.list.field("postImages", { type: PostImage });
    t.nonNull.field("author", { type: User });
    t.int("likeCount");
    t.int("repostCount");
    t.int("replyCount");
    t.field("replyOriginalPost", { type: Post });
    t.field("repostOriginalPost", { type: Post });
    t.list.nonNull.field("replies", { type: Post });
  },
});
const PostImage = objectType({
  name: "PostImage",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("url");
    t.string("caption");
    t.nonNull.field("post", { type: Post });
  },
});
const ProfileImage = objectType({
  name: "ProfileImage",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("url");
    t.nonNull.field("user", { type: User });
  },
});
const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.nonNull.field("users", { type: User });
    t.field("userById", {
      type: User,
      args: {
        id: nonNull(idArg()),
      },
    });
    t.list.field("posts", { type: Post });
    t.list.field("postByUser", {
      type: Post,
      args: {
        userId: nonNull(idArg()),
      },
    });
  },
});
const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("username");
    t.string("bio");
    t.string("fullname");
    t.int("followerCount");
    t.int("followingCount");
    t.int("postCount");
    t.list.nonNull.field("followers", { type: User });
    t.list.nonNull.field("followings", { type: User });
    t.list.nonNull.field("posts", { type: Post });
    t.nonNull.field("profileImage", { type: ProfileImage });
  },
});

const PostCreateInput = inputObjectType({
  name: "PostCreateInput",
  definition(t) {
    t.nonNull.string("body");
    t.list.field("postImages", { type: PostImageCreateInput });
  },
});
const PostImageCreateInput = inputObjectType({
  name: "PostImageCreateInput",
  definition(t) {
    t.nonNull.string("url");
    t.string("caption");
  },
});
const ProfileImageInput = inputObjectType({
  name: "ProfileImageInput",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("url");
  },
});
const UserCreateInput = inputObjectType({
  name: "UserCreateInput",
  definition(t) {
    t.nonNull.string("username");
    t.string("bio");
    t.string("fullname");
    t.list.field("profileImage", { type: ProfileImageInput });
    t.list.field("posts", { type: PostCreateInput });
    t.list.field("followers", { type: UserCreateInput });
    t.list.field("following", { type: UserCreateInput });
  },
});
