import { Request, Response } from "express";
import { client } from "../../../index";
import mp3Duration from "@rocka/mp3-duration";

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
    const duration = await mp3Duration(files.audio[0].path);
    const audio_size = niceBytes(String(files.audio[0].size));
    const pdf_size = niceBytes(String(files.pdf[0].size));

    const newBook = await client.book.create({
      data: {
        audio_link: files.audio[0].path,
        image: files.image[0].path,
        book_link: files.pdf[0].path,
        author: book.author,
        title: book.title,
        page: Number(book.page),
        description: book.description,
        audio_size: audio_size,
        pdf_size: pdf_size,
        duration: duration,
      },
    });
    res.json(newBook);
  } catch (e) {
    console.log(e);
    res.json(e);
  }
};
const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function niceBytes(x: string) {
  let l = 0,
    n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}
