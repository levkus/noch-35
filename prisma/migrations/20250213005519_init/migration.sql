-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "drinkBeer" BOOLEAN NOT NULL DEFAULT false,
    "drinkWhiteWine" BOOLEAN NOT NULL DEFAULT false,
    "drinkRedWine" BOOLEAN NOT NULL DEFAULT false,
    "drinkStrong" BOOLEAN NOT NULL DEFAULT false,
    "drinkNonAlcoholic" BOOLEAN NOT NULL DEFAULT false,
    "isAttending" BOOLEAN NOT NULL DEFAULT false,
    "withPartner" BOOLEAN NOT NULL DEFAULT false,
    "withKids" BOOLEAN NOT NULL DEFAULT false,
    "notComing" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_slug_key" ON "User"("slug");
