-- CreateEnum
CREATE TYPE "content_type" AS ENUM ('hero', 'intro', 'goal', 'instructor', 'other');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT,
    "image" TEXT,
    "emailVerified" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "type" TEXT,
    "access_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_contents" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "content_type" NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "landing_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "landing_images" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "landing_content_id" INTEGER NOT NULL,

    CONSTRAINT "landing_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "landing_images" ADD CONSTRAINT "landing_images_landing_content_id_fkey" FOREIGN KEY ("landing_content_id") REFERENCES "landing_contents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
