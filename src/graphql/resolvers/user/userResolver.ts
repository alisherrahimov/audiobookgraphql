import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import {
  Book,
  Book_Id,
  MutationInterestArgs,
  User,
  UserInput,
} from "generated/graphql";
const client = new PrismaClient();
const getUser = async (id: string): Promise<User> => {
  try {
    return await client.user.findFirst({
      where: { id: id },
      include: { review: true, interest: true },
    });
  } catch (e) {
    return e;
  }
};
const getAllUsers = async (): Promise<User[]> => {
  try {
    return await client.user.findMany();
  } catch (e) {
    return e;
  }
};
const deleteUser = async (id: string): Promise<User | null> => {
  try {
    return await client.user.findFirst({ where: { id: id } });
    // return await client.user.delete({ where: { id: id } });
  } catch (e) {
    return e;
  }
};
const createUser = async (user: UserInput): Promise<User> => {
  ////date year-month-day
  try {
    const hash = bcrypt.hashSync(user.password, 10);
    return await client.user.create({
      data: {
        email: user.email,
        username: user.username,
        password: hash,
      },
      include: { review: true },
    });
  } catch (e) {
    return e;
  }
};
const interestCategory = async (
  uid: string[],
  userid: string
): Promise<boolean> => {
  console.log(uid);
  try {
    await client.user.update({
      data: {
        interest: {
          connect: uid.map((val, index) => {
            return { id: val };
          }),
        },
      },
      where: {
        id: userid,
      },
    });
    return true;
  } catch (error) {
    return error;
  }
};

const saveBook = async (book: Book_Id): Promise<boolean> => {
  try {
    await client.user.update({
      data: {
        mybooks: { set: { id: book.id } },
      },
      where: {
        id: book.id,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

export {
  getUser,
  getAllUsers,
  deleteUser,
  createUser,
  interestCategory,
  saveBook,
};
