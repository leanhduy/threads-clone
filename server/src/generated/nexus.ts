/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PostCreateInput: { // input type
    body: string; // String!
    postImages?: Array<NexusGenInputs['PostImageCreateInput'] | null> | null; // [PostImageCreateInput]
  }
  PostImageCreateInput: { // input type
    caption?: string | null; // String
    url: string; // String!
  }
  ProfileImageCreateInput: { // input type
    id: string; // ID!
    url: string; // String!
  }
  UserCreateInput: { // input type
    bio?: string | null; // String
    followers?: Array<NexusGenInputs['UserCreateInput'] | null> | null; // [UserCreateInput]
    following?: Array<NexusGenInputs['UserCreateInput'] | null> | null; // [UserCreateInput]
    fullname?: string | null; // String
    posts?: Array<NexusGenInputs['PostCreateInput'] | null> | null; // [PostCreateInput]
    profileImage?: Array<NexusGenInputs['ProfileImageCreateInput'] | null> | null; // [ProfileImageCreateInput]
    username: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mutation: {};
  Post: { // root type
    body: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    likeCount?: number | null; // Int
    replyCount?: number | null; // Int
    repostCount?: number | null; // Int
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  PostImage: { // root type
    caption?: string | null; // String
    id: string; // ID!
    url: string; // String!
  }
  ProfileImage: { // root type
    id: string; // ID!
    url: string; // String!
  }
  Query: {};
  User: { // root type
    bio?: string | null; // String
    followerCount?: number | null; // Int
    followingCount?: number | null; // Int
    fullname?: string | null; // String
    id: string; // ID!
    joinedOn: NexusGenScalars['DateTime']; // DateTime!
    postCount?: number | null; // Int
    username: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    addUser: NexusGenRootTypes['User'] | null; // User
    createPost: NexusGenRootTypes['Post'] | null; // Post
    updatePost: NexusGenRootTypes['Post'] | null; // Post
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    body: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // ID!
    likeCount: number | null; // Int
    parentPost: NexusGenRootTypes['Post'] | null; // Post
    postImages: NexusGenRootTypes['PostImage'][] | null; // [PostImage!]
    replies: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    replyCount: number | null; // Int
    repostCount: number | null; // Int
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  PostImage: { // field return type
    caption: string | null; // String
    id: string; // ID!
    post: NexusGenRootTypes['Post']; // Post!
    url: string; // String!
  }
  ProfileImage: { // field return type
    id: string; // ID!
    url: string; // String!
    user: NexusGenRootTypes['User'] | null; // User
  }
  Query: { // field return type
    feedFollowing: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    feedForYou: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    postByUser: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    posts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    profileImages: NexusGenRootTypes['ProfileImage'][]; // [ProfileImage!]!
    userById: NexusGenRootTypes['User'] | null; // User
    userProfileImage: NexusGenRootTypes['ProfileImage']; // ProfileImage!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    bio: string | null; // String
    followedBy: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    followerCount: number | null; // Int
    following: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    followingCount: number | null; // Int
    fullname: string | null; // String
    id: string; // ID!
    joinedOn: NexusGenScalars['DateTime']; // DateTime!
    postCount: number | null; // Int
    posts: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    profileImage: NexusGenRootTypes['ProfileImage'] | null; // ProfileImage
    username: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    addUser: 'User'
    createPost: 'Post'
    updatePost: 'Post'
  }
  Post: { // field return type name
    author: 'User'
    body: 'String'
    createdAt: 'DateTime'
    id: 'ID'
    likeCount: 'Int'
    parentPost: 'Post'
    postImages: 'PostImage'
    replies: 'Post'
    replyCount: 'Int'
    repostCount: 'Int'
    updatedAt: 'DateTime'
  }
  PostImage: { // field return type name
    caption: 'String'
    id: 'ID'
    post: 'Post'
    url: 'String'
  }
  ProfileImage: { // field return type name
    id: 'ID'
    url: 'String'
    user: 'User'
  }
  Query: { // field return type name
    feedFollowing: 'Post'
    feedForYou: 'Post'
    postByUser: 'Post'
    posts: 'Post'
    profileImages: 'ProfileImage'
    userById: 'User'
    userProfileImage: 'ProfileImage'
    users: 'User'
  }
  User: { // field return type name
    bio: 'String'
    followedBy: 'User'
    followerCount: 'Int'
    following: 'User'
    followingCount: 'Int'
    fullname: 'String'
    id: 'ID'
    joinedOn: 'DateTime'
    postCount: 'Int'
    posts: 'Post'
    profileImage: 'ProfileImage'
    username: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addUser: { // args
      userCreateInput: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    createPost: { // args
      authorId: string; // ID!
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
    updatePost: { // args
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
      postId: string; // ID!
    }
  }
  Query: {
    feedFollowing: { // args
      userId?: number | null; // Int
    }
    postByUser: { // args
      userId?: number | null; // Int
    }
    userById: { // args
      id?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}