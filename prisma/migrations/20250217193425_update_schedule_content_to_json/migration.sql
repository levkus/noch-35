/*
  Warnings:

  - The `scheduleContent` column on the `content` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "content" DROP COLUMN "scheduleContent",
ADD COLUMN     "scheduleContent" JSONB NOT NULL DEFAULT '[]';
