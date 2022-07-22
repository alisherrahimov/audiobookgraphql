/*
  Warnings:

  - Made the column `duration` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "duration" SET NOT NULL;
