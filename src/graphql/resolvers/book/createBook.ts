import { Request, Response } from "express";
import { client } from "../../../index";

export const createBook = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const files: any = req.files;
    const book: {
      author: string;
      title: string;
      page: number;
      description: string;
    } = req.body;

    const newBook = await client.book.create({
      data: {
        audio_link: files.audio[0].path,
        image: files.image[0].path,
        book_link: files.pdf[0].path,
        author: book.author,
        title: book.title,
        page: Number(book.page),
        description: book.description,
      },
    });
    res.json(newBook);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
