import { PrismaClient } from "@prisma/client";
import { User, UserInput } from "generated/graphql";
const client = new PrismaClient();
const getUser = async (id: string): Promise<User> => {
  try {
    return await client.user.findFirst({
      where: { id: id },
      include: { Review: true },
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
const deleteUser = async (id: string): Promise<User> => {
  try {
    return await client.user.delete({ where: { id: id } });
  } catch (e) {
    return e;
  }
};
const createUser = async (user: UserInput): Promise<User> => {
  try {
    const dateString = Date.parse(user.birthday);
    const userBirthday = new Date(dateString);
    return await client.user.create({
      data: {
        birthday: userBirthday,
        email: user.email,
        username: user.username,
        password: user.password,
      },
      include: { Review: true },
    });
  } catch (e) {
    return e;
  }
};
export { getUser, getAllUsers, deleteUser, createUser };
