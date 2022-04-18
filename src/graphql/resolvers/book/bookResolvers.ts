import { PrismaClient } from "@prisma/client";
import { Book, BookInput } from "generated/graphql";
const client = new PrismaClient();
const getBook = async (id: string): Promise<Book> => {
  try {
    const book = await client.book.findFirst({
      where: { id: id },
      include: { category: true },
    });
    return book;
  } catch (e) {
    return e;
  }
};
const getAllBooks = async (): Promise<Book[]> => {
  try {
    const books = await client.book.findMany({ include: { category: true } });
    return books;
  } catch (e) {
    return e;
  }
};
const createBook = async (book: BookInput): Promise<Book> => {
  try {
    const newBook = await client.book.create({
      data: {
        audio_link: book.audio_link,
        author: book.author,
        book_link: book.book_link,
        image: book.image,
        title: book.title,
        description: book.description,
      },
      include: { category: true },
    });
    return newBook;
  } catch (e) {
    return e;
  }
};

export { getBook, getAllBooks, createBook };
