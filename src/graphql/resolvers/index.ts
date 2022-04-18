import {
  Book,
  Category,
  QueryBookArgs,
  QueryCategoryArgs,
  QueryUserArgs,
  Review,
  User,
} from "../../generated/graphql";
import { createBook, getAllBooks, getBook } from "./book/bookResolvers";
import { getAllCategories, getCategory } from "./category/categoryResolvers";
import { getAllReview } from "./review/reviewResolvers";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
} from "./user/userResolver";

const resolvers = {
  Query: {
    user: async (_: any, args: QueryUserArgs): Promise<User> => {
      return getUser(args.id);
    },
    users: async (): Promise<User[]> => {
      return getAllUsers();
    },

    deleteUser: async (_: any, args: QueryUserArgs): Promise<User> => {
      return deleteUser(args.id);
    },
    book: async (_: any, args: QueryBookArgs): Promise<Book> => {
      return await getBook(args.id);
    },
    books: async (): Promise<Book[]> => {
      return await getAllBooks();
    },
    category: async (_: any, args: QueryCategoryArgs): Promise<Category> => {
      return await getCategory(args.id);
    },
    categories: async (): Promise<Category[]> => {
      return await getAllCategories();
    },
    reviews: async (): Promise<Review[]> => {
      return await getAllReview();
    },
  },
  Mutation: {
    createUser: async (_: any, args: { userInput: User }): Promise<User> => {
      return await createUser(args.userInput);
    },
    createBook: async (_: any, args: { bookInput: Book }): Promise<Book> => {
      return await createBook(args.bookInput);
    },
  },
};
export default resolvers;
