import { PrismaClient } from "@prisma/client";
import { Category } from "generated/graphql";
export const client = new PrismaClient();

const getCategory = async (id: string): Promise<Category> => {
  try {
    const category = await client.category.findFirst({
      where: {
        id,
      },
    });
    return category;
  } catch (e) {
    return e;
  }
};

const getAllCategories = async (): Promise<Category[]> => {
  try {
    const categories = await client.category.findMany();
    return categories;
  } catch (e) {
    return e;
  }
};

export { getCategory, getAllCategories };
