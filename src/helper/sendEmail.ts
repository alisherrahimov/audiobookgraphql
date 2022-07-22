import { client } from "../index";
import nodemailer from "nodemailer";
export const sendEmail = async (email: string): Promise<boolean> => {
  try {
    const account = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "alisherrahimovprogrammes@gmail.com",
        pass: "gvuljopktvpyfjjx",
      },
    });
    const code = Math.floor(Math.random() * 1000000);
    await account.sendMail({
      from: "AudioBook mobile application",
      to: email,
      subject: "Sms verification for AudioBook",
      text: `code ${code} `,
    });
    await client.user.update({
      data: {
        code: code,
      },
      where: {
        email: email,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};
