/*
  Warnings:

  - You are about to drop the column `userId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `book_id` on the `MyBooks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userId_fkey";

-- DropForeignKey
ALTER TABLE "MyBooks" DROP CONSTRAINT "MyBooks_book_id_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "MyBooks" DROP COLUMN "book_id";
