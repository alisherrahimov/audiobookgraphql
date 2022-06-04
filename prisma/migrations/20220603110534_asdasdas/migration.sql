-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_id_fkey";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "bookId" TEXT;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
