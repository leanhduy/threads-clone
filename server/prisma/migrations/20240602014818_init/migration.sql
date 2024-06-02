-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "bio" TEXT,
    "fullname" TEXT,
    "joinedOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "followerCount" INTEGER NOT NULL DEFAULT 0,
    "followingCount" INTEGER NOT NULL DEFAULT 0,
    "postCount" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follows" (
    "followedById" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,

    CONSTRAINT "Follows_pkey" PRIMARY KEY ("followingId","followedById")
);

-- CreateTable
CREATE TABLE "ProfileImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ProfileImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "repostCount" INTEGER NOT NULL DEFAULT 0,
    "replyCount" INTEGER NOT NULL DEFAULT 0,
    "authorId" INTEGER NOT NULL,
    "parentPostId" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PostImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "caption" TEXT,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PostImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "ProfileImage_userId_key" ON "ProfileImage"("userId");

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_followedById_fkey" FOREIGN KEY ("followedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follows" ADD CONSTRAINT "Follows_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProfileImage" ADD CONSTRAINT "ProfileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_parentPostId_fkey" FOREIGN KEY ("parentPostId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PostImage" ADD CONSTRAINT "PostImage_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
