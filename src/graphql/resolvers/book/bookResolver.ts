import { PrismaClient } from "@prisma/client";
import {
  Book,
  Home,
  Category,
  MutationCreateReviewArgs,
  Review,
} from "generated/graphql";
const client = new PrismaClient();
const getBook = async (id: string): Promise<Book> => {
  try {
    const book = await client.book.findFirst({
      where: { id: id },
      include: {
        category: true,
        review: { include: { user: true, book: true } },
      },
    });
    return book;
  } catch (e) {
    return e;
  }
};
const getAllBooks = async (): Promise<Book[] | null> => {
  try {
    const books = await client.book.findMany({
      include: {
        category: true,
        review: { include: { user: true, book: true } },
      },
    });
    return books;
  } catch (e) {
    return e;
  }
};

const home = async (): Promise<Home> => {
  let token: string = "";
  try {
    const recommended = await client.book.findMany({
      take: 10,
      include: { category: true, review: true },
    });
    const bestseller = await client.book.findMany({
      // where: { category: { some: { id: token } } },
      take: 10,
      include: { category: true, review: true },
    });
    const new_release = await client.book.findMany({
      // where: { category: { some: { id: token } } },
      take: 10,
      include: { category: true, review: true },
    });
    const trend = await client.book.findMany({
      // where: { category: { some: { id: token } } },
      include: { category: true, review: true },
      take: 10,
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
const search = async (text: string): Promise<Book[] | null> => {
  try {
    return await client.book.findMany({
      where: {
        title: {
          search: text,
        },
        description: {
          search: text,
        },
        author: {
          search: text,
        },
      },
    });
  } catch (error) {
    return error;
  }
};
const createReview = async ({
  bookId,
  content,
  userId,
  rating,
}: {
  bookId: string;
  content: string;
  userId: string;
  rating: number;
}): Promise<Review> => {
  try {
    const review = await client.review.create({
      data: {
        content: content,
        userId: userId,
        bookId: bookId,
        rating: rating,
      },
    });
    return review;
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
  home,
  search,
  createReview,
  createCategory,
  getBookByCategory,
};
