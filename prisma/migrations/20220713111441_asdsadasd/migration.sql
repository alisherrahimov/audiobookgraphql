/*
  Warnings:

  - You are about to drop the `MyBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MyBooks" DROP CONSTRAINT "MyBooks_bookid_fkey";

-- DropForeignKey
ALTER TABLE "MyBooks" DROP CONSTRAINT "MyBooks_userId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "MyBooks";

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
