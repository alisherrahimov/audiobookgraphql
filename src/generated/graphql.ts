import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type File = {
  __typename?: 'File';
  encoding: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  active?: Maybe<Scalars['Boolean']>;
  checkCode?: Maybe<Scalars['Boolean']>;
  createBook?: Maybe<Book>;
  createCategory?: Maybe<Category>;
  createReview?: Maybe<Review>;
  createUser?: Maybe<User>;
  forgetPassword?: Maybe<Scalars['Boolean']>;
  getBookByCategory?: Maybe<Array<Maybe<Book>>>;
  interest?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['String']>;
  myBooks?: Maybe<Array<Maybe<Book>>>;
  register?: Maybe<Scalars['String']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  searchBook?: Maybe<Array<Maybe<Book>>>;
};


export type MutationActiveArgs = {
  input?: InputMaybe<Active>;
};


export type MutationCheckCodeArgs = {
  input?: InputMaybe<CheckCode>;
};


export type MutationCreateBookArgs = {
  input?: InputMaybe<BookInput>;
};


export type MutationCreateCategoryArgs = {
  name: Scalars['String'];
};


export type MutationCreateReviewArgs = {
  bookId: Scalars['ID'];
  content: Scalars['String'];
  userID: Scalars['String'];
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationForgetPasswordArgs = {
  input?: InputMaybe<ForgetPassword>;
};


export type MutationGetBookByCategoryArgs = {
  input?: InputMaybe<GetByCategory>;
};


export type MutationInterestArgs = {
  input?: InputMaybe<InterestCategory>;
};


export type MutationLoginArgs = {
  input: Login;
};


export type MutationMyBooksArgs = {
  input?: InputMaybe<Book_Id>;
};


export type MutationRegisterArgs = {
  input: Register;
};


export type MutationResetPasswordArgs = {
  input?: InputMaybe<ResetPassword>;
};


export type MutationSearchBookArgs = {
  author?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  category?: Maybe<Category>;
  deleteUser?: Maybe<User>;
  home?: Maybe<Home>;
  review?: Maybe<Review>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryDeleteUserArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Active = {
  code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'book';
  audio_link?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  book_link?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<Category>>>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  review?: Maybe<Array<Maybe<Review>>>;
  star?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type BookInput = {
  audio_link?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  book_link?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Book_Id = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category = {
  __typename?: 'category';
  createdAt?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type CheckCode = {
  code?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type ForgetPassword = {
  email?: InputMaybe<Scalars['String']>;
};

export type GetByCategory = {
  id?: InputMaybe<Scalars['String']>;
};

export type Home = {
  __typename?: 'home';
  bestseller?: Maybe<Array<Maybe<Book>>>;
  new_release?: Maybe<Array<Maybe<Book>>>;
  recommended?: Maybe<Array<Maybe<Book>>>;
  trend?: Maybe<Array<Maybe<Book>>>;
};

export type InterestCategory = {
  id?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Login = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Register = {
  date?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type ResetPassword = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Review = {
  __typename?: 'review';
  book?: Maybe<Book>;
  content?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  id?: Maybe<Scalars['ID']>;
  updatedAt: Scalars['Date'];
  user?: Maybe<User>;
};

export type User = {
  __typename?: 'user';
  active?: Maybe<Scalars['Boolean']>;
  birthday?: Maybe<Scalars['Date']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  interest?: Maybe<Array<Maybe<Category>>>;
  mybooks?: Maybe<Array<Maybe<Book>>>;
  password?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  sub_end?: Maybe<Scalars['Date']>;
  subscription?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  username?: Maybe<Scalars['String']>;
};

export type UserInput = {
  birthday?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  File: ResolverTypeWrapper<File>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  active: Active;
  book: ResolverTypeWrapper<Book>;
  bookInput: BookInput;
  book_id: Book_Id;
  category: ResolverTypeWrapper<Category>;
  checkCode: CheckCode;
  forgetPassword: ForgetPassword;
  getByCategory: GetByCategory;
  home: ResolverTypeWrapper<Home>;
  interestCategory: InterestCategory;
  login: Login;
  register: Register;
  resetPassword: ResetPassword;
  review: ResolverTypeWrapper<Review>;
  user: ResolverTypeWrapper<User>;
  userInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Date: Scalars['Date'];
  File: File;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  active: Active;
  book: Book;
  bookInput: BookInput;
  book_id: Book_Id;
  category: Category;
  checkCode: CheckCode;
  forgetPassword: ForgetPassword;
  getByCategory: GetByCategory;
  home: Home;
  interestCategory: InterestCategory;
  login: Login;
  register: Register;
  resetPassword: ResetPassword;
  review: Review;
  user: User;
  userInput: UserInput;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationActiveArgs>>;
  checkCode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationCheckCodeArgs>>;
  createBook?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType, Partial<MutationCreateBookArgs>>;
  createCategory?: Resolver<Maybe<ResolversTypes['category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'name'>>;
  createReview?: Resolver<Maybe<ResolversTypes['review']>, ParentType, ContextType, RequireFields<MutationCreateReviewArgs, 'bookId' | 'content' | 'userID'>>;
  createUser?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, Partial<MutationCreateUserArgs>>;
  forgetPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationForgetPasswordArgs>>;
  getBookByCategory?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType, Partial<MutationGetBookByCategoryArgs>>;
  interest?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationInterestArgs>>;
  login?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  myBooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType, Partial<MutationMyBooksArgs>>;
  register?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>;
  resetPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationResetPasswordArgs>>;
  searchBook?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType, Partial<MutationSearchBookArgs>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  book?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType, RequireFields<QueryBookArgs, 'id'>>;
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['category']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<QueryDeleteUserArgs, 'id'>>;
  home?: Resolver<Maybe<ResolversTypes['home']>, ParentType, ContextType>;
  review?: Resolver<Maybe<ResolversTypes['review']>, ParentType, ContextType, RequireFields<QueryReviewArgs, 'id'>>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['review']>>>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['user']>>>, ParentType, ContextType>;
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['book'] = ResolversParentTypes['book']> = {
  audio_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  book_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<Array<Maybe<ResolversTypes['category']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  downloads?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  review?: Resolver<Maybe<Array<Maybe<ResolversTypes['review']>>>, ParentType, ContextType>;
  star?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['category'] = ResolversParentTypes['category']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HomeResolvers<ContextType = any, ParentType extends ResolversParentTypes['home'] = ResolversParentTypes['home']> = {
  bestseller?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType>;
  new_release?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType>;
  recommended?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType>;
  trend?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['review'] = ResolversParentTypes['review']> = {
  book?: Resolver<Maybe<ResolversTypes['book']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['user']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['user'] = ResolversParentTypes['user']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  interest?: Resolver<Maybe<Array<Maybe<ResolversTypes['category']>>>, ParentType, ContextType>;
  mybooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['book']>>>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['review']>>>, ParentType, ContextType>;
  sub_end?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Date?: GraphQLScalarType;
  File?: FileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  book?: BookResolvers<ContextType>;
  category?: CategoryResolvers<ContextType>;
  home?: HomeResolvers<ContextType>;
  review?: ReviewResolvers<ContextType>;
  user?: UserResolvers<ContextType>;
};

