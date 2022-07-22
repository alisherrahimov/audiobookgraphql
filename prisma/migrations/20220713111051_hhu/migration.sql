-- AlterTable
ALTER TABLE "MyBooks" ADD COLUMN     "bookid" TEXT;

-- AddForeignKey
ALTER TABLE "MyBooks" ADD CONSTRAINT "MyBooks_bookid_fkey" FOREIGN KEY ("bookid") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
