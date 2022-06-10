import { PrismaClient } from "@prisma/client";
import {
  Book,
  BookInput,
  Home,
  HomeResolvers,
  Category,
  MutationCreateReviewArgs,
} from "generated/graphql";
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
const getAllBooks = async (): Promise<Book[] | null> => {
  try {
    const books = await client.book.findMany({ include: { category: true } });
    return books;
  } catch (e) {
    return e;
  }
};
const createBook = async (book: BookInput): Promise<Book> => {
  const cate = book.category.map((val, index) => {
    return {
      id: val,
    };
  });

  try {
    const newBook = await client.book.create({
      data: {
        audio_link: book.audio_link,
        author: book.author,
        book_link: book.book_link,
        image: book.image,
        title: book.title,
        description: book.description,
        category: {
          createMany: {
            data: cate,
          },
        },
      },
      include: { category: true },
    });
    return newBook;
  } catch (e) {
    return e;
  }
};
const home = async (): Promise<Home> => {
  let token: string = "";
  try {
    const recommended = await client.book.findMany({
      where: { category: { some: { id: token } } },
      take: 3,
      include: { category: true, review: true },
    });
    const bestseller = await client.book.findMany({
      where: { category: { some: { id: token } } },
      take: 3,
      include: { category: true, review: true },
    });
    const new_release = await client.book.findMany({
      where: { category: { some: { id: token } } },
      take: 3,
      include: { category: true, review: true },
    });
    const trend = await client.book.findMany({
      where: { category: { some: { id: token } } },
      include: { category: true, review: true },
      take: 3,
    });
    return {
      recommended: recommended,
      bestseller: bestseller,
      new_release: new_release,
      trend: trend,
    };
  } catch (error) {
    return error;
  }
};
const search = async (
  title: string,
  author: string
): Promise<Book[] | null> => {
  try {
    return await client.book.findMany({
      where: {
        title: {
          search: title || author,
        },
        description: {
          search: title || author,
        },
      },
    });
  } catch (error) {
    return error;
  }
};
const createReview = async (
  review: MutationCreateReviewArgs
): Promise<boolean> => {
  try {
    await client.review.create({
      data: {
        bookId: review.bookId,
        content: review.content,
        userId: review.userID,
      },
    });
    return true;
  } catch (error) {
    return error;
  }
};
const createCategory = async (category: Category): Promise<Category> => {
  try {
    const newCategory = await client.category.create({
      data: {
        name: category.name,
      },
    });
    return newCategory;
  } catch (error) {
    return error;
  }
};
const getBookByCategory = async (id: string): Promise<Book[] | null> => {
  return await client.book.findMany({
    where: {
      category: {
        some: {
          id: id,
        },
      },
    },
    take: 15,
  });
};

export {
  getBook,
  getAllBooks,
  createBook,
  home,
  search,
  createReview,
  createCategory,
  getBookByCategory,
};
