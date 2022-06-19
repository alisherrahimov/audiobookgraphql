import {
  ActiveUser,
  CheckCode,
  ForgetPassword,
  Login,
  Register,
  ResetPassword,
} from "./auth/authResolver";
import {
  Active,
  Book,
  BookInput,
  Book_Id,
  Category,
  Home,
  LoginInput,
  MutationActiveArgs,
  MutationCheckCodeArgs,
  MutationCreateReviewArgs,
  MutationForgetPasswordArgs,
  MutationInterestArgs,
  MutationLoginArgs,
  MutationRegisterArgs,
  MutationResetPasswordArgs,
  MutationSearchBookArgs,
  QueryBookArgs,
  QueryCategoryArgs,
  QueryUserArgs,
  Review,
  User,
} from "../../generated/graphql";
import {
  createBook,
  createCategory,
  createReview,
  getAllBooks,
  getBook,
  getBookByCategory,
  home,
  search,
} from "./book/bookResolver";
import { getAllCategories, getCategory } from "./category/categoryResolvers";
import { getAllReview } from "./review/reviewResolvers";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  interestCategory,
  saveBook,
} from "./user/userResolver";
import { ResponseType } from "helper/type/ResponseType";

const resolvers = {
  Query: {
    // getAllBooks,
    user: async (_: any, args: QueryUserArgs): Promise<User> => {
      return getUser(args.id);
    },
    // get all users
    users: async (): Promise<User[]> => {
      return getAllUsers();
    },
    // delete user
    deleteUser: async (_: any, args: QueryUserArgs): Promise<User> => {
      return deleteUser(args.id);
    },
    // get one book
    book: async (_: any, args: QueryBookArgs): Promise<Book> => {
      return await getBook(args.id);
    },
    // get all books
    books: async (): Promise<Book[]> => {
      return await getAllBooks();
    },
    // get one category
    category: async (_: any, args: QueryCategoryArgs): Promise<Category> => {
      return await getCategory(args.id);
    },
    //category by book
    categories: async (): Promise<Category[]> => {
      return await getAllCategories();
    },
    // User take book review
    reviews: async (): Promise<Review[]> => {
      return await getAllReview();
    },
    //Home route
    home: async (): Promise<Home> => {
      return await home();
    },
  },
  Mutation: {
    // Create custom user Route
    createUser: async (_: any, args: { input: User }): Promise<User> => {
      return await createUser(args.input);
    },
    // Create book route
    createBook: async (_: any, args: { input: BookInput }): Promise<Book> => {
      return await createBook(args.input);
    },
    // Login route
    login: async (
      _: any,
      arg: { input: LoginInput }
    ): Promise<ResponseType> => {
      const { email, password } = arg.input;
      return await Login({ email: email, password: password });
    },
    //User register route
    register: async (
      _: any,
      arg: {
        email: string;
        password: string;
        username: string;
        date: string;
      }
    ): Promise<ResponseType> => {
      const { date, email, password, username } = arg;
      return await Register({ date, email, password, username });
    },
    //Confiramation code route
    active: async (
      _: any,
      args: { email: string; code: number }
    ): Promise<boolean> => {
      return await ActiveUser({
        email: args.email,
        code: args.code,
      });
    },
    //User interesting route
    interest: async (
      _: any,
      args: { input: MutationInterestArgs }
    ): Promise<boolean> => {
      return await interestCategory(args.input);
    },
    //User book save
    myBooks: async (_: any, args: { input: Book_Id }): Promise<boolean> => {
      return await saveBook(args.input);
    },
    //create review route
    createReview: async (
      _: any,
      args: { input: MutationCreateReviewArgs }
    ): Promise<boolean> => {
      return await createReview(args.input);
    },
    //create category route
    createCategory: async (
      _: any,
      args: { name: string }
    ): Promise<Category> => {
      return await createCategory({ name: args.name });
    },
    //search book route
    searchBook: async (
      _: any,
      args: { input: MutationSearchBookArgs }
    ): Promise<Book[] | null> => {
      return await search(args.input.author, args.input.title);
    },
    forgetPassword: async (
      _: any,
      args: { email: string }
    ): Promise<ResponseType> => {
      return await ForgetPassword(args.email);
    },
    resetPassword: async (
      _: any,
      args: { email: string; password: string }
    ): Promise<ResponseType> => {
      return await ResetPassword(args.email, args.password);
    },
    checkCode: async (
      _: any,
      args: { email: string; code: number }
    ): Promise<ResponseType> => {
      return await CheckCode(args.email, args.code);
    },
    getBookByCategory: async (
      _: any,
      args: { input: string }
    ): Promise<Book[] | null> => {
      return await getBookByCategory(args.input);
    },
  },
};
export default resolvers;
