-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "graffiti" JSONB NOT NULL DEFAULT '{"selections":[]}';

-- AlterTable
ALTER TABLE "content" ADD COLUMN     "availableGraffiti" JSONB NOT NULL DEFAULT '[]',
ADD COLUMN     "graffitiContent" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "graffitiLabel" TEXT NOT NULL DEFAULT '';
