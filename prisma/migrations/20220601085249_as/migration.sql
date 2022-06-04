-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "userId" TEXT;

-- CreateTable
CREATE TABLE "MyBooks" (
    "id" TEXT NOT NULL,
    "book_id" TEXT,
    "userId" TEXT,

    CONSTRAINT "MyBooks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MyBooks" ADD CONSTRAINT "MyBooks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MyBooks" ADD CONSTRAINT "MyBooks_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
