import { PrismaClient } from "@prisma/client";
import { Review } from "generated/graphql";
const client = new PrismaClient();

const getAllReview = async (): Promise<Review[]> => {
  try {
    const review = await client.review.findMany({
      include: { book: { include: { category: true } }, user: true },
    });
    return review;
  } catch (e) {
    return e;
  }
};

export { getAllReview };
