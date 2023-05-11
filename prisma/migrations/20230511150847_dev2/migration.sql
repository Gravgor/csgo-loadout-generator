/*
  Warnings:

  - Added the required column `float` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pattern` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weapon` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "float" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "pattern" TEXT NOT NULL,
ADD COLUMN     "weapon" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ItemStandalone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "weapon" TEXT NOT NULL,
    "pattern" TEXT NOT NULL,
    "min_float" DOUBLE PRECISION NOT NULL,
    "max_float" DOUBLE PRECISION NOT NULL,
    "image" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemStandalone_pkey" PRIMARY KEY ("id")
);
