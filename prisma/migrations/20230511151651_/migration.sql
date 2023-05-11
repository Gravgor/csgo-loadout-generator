/*
  Warnings:

  - You are about to drop the column `max_float` on the `ItemStandalone` table. All the data in the column will be lost.
  - You are about to drop the column `min_float` on the `ItemStandalone` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ItemStandalone" DROP COLUMN "max_float",
DROP COLUMN "min_float";
