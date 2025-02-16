/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "drinks" JSONB NOT NULL DEFAULT '{"selections":[]}',
    "attendance" JSONB NOT NULL DEFAULT '{"selection":null}',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dateAddress" TEXT NOT NULL DEFAULT '',
    "dateLink" TEXT NOT NULL DEFAULT '',
    "introSemiTransparentText" TEXT NOT NULL DEFAULT '',
    "introOpaqueText" TEXT NOT NULL DEFAULT '',
    "descriptionHeader" TEXT NOT NULL DEFAULT '',
    "descriptionContent" TEXT NOT NULL DEFAULT '',
    "videoLink" TEXT NOT NULL DEFAULT '',
    "scheduleContent" TEXT NOT NULL DEFAULT '',
    "clothingLabel" TEXT NOT NULL DEFAULT '',
    "clothingContent" TEXT NOT NULL DEFAULT '',
    "presentsLabel" TEXT NOT NULL DEFAULT '',
    "presentsContent" TEXT NOT NULL DEFAULT '',
    "wishlistLink" TEXT NOT NULL DEFAULT '',
    "drinksLabel" TEXT NOT NULL DEFAULT '',
    "drinksContent" TEXT NOT NULL DEFAULT '',
    "availableDrinks" JSONB NOT NULL DEFAULT '[]',
    "attendanceLabel" TEXT NOT NULL DEFAULT '',
    "attendanceOptions" JSONB NOT NULL DEFAULT '[]',
    "submitButtonText" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "content_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_slug_key" ON "Guest"("slug");
