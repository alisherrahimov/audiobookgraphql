import {
  MutationLoginArgs,
  MutationRegisterArgs,
  MutationActiveArgs,
  MutationResetPasswordArgs,
  MutationCheckCodeArgs,
} from "generated/graphql";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../../helper/sendEmail";

export const client = new PrismaClient();
export const Login = async (user: MutationLoginArgs): Promise<string> => {
  const { email, password } = user.input;
  try {
    const person = await client.user.findUnique({ where: { email } });
    if (!person) {
      return "User not found";
    }
    const deCode = bcrypt.compareSync(person.password, password);
    if (deCode) {
      const token = jwt.sign(person, process.env.token_key, {
        expiresIn: "10d",
      });
      return token;
    }
    return "Password wrong";
  } catch (error) {
    return error;
  }
};

export const Register = async (user: MutationRegisterArgs): Promise<string> => {
  const { date, email, password } = user.input;
  try {
    const findUser = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser) {
      return "User already registered";
    }
    const hash = bcrypt.hashSync(password, 10);
    await client.user.create({
      data: {
        email,
        birthday: date,
        password: hash,
      },
    });
    if (await sendEmail(email)) {
      return Login({ input: { email: email, password: password } });
    }
    return "not send sms";
  } catch (error) {
    return error;
  }
};

export const Active = async (
  verificationCode: MutationActiveArgs
): Promise<boolean> => {
  const { code, email } = verificationCode.input;
  try {
    const activeUser = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (activeUser.code == code) {
      await client.user.update({
        data: {
          active: true,
        },
        where: {
          email,
        },
      });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
};

export const ForgetPassword = async (email: string): Promise<boolean> => {
  try {
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return false;
    }
    const generateLink = await sendEmail(email);
    if (generateLink) {
      return true;
    }
  } catch (error) {
    return error;
  }
};
export const CheckCode = async (
  verificationCode: MutationCheckCodeArgs
): Promise<boolean> => {
  const { email, code } = verificationCode.input;
  try {
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return false;
    }
    if (user.code == code) {
      return true;
    }
  } catch (error) {
    return error;
  }
};

export const ResetPassword = async (
  resetPassword: MutationResetPasswordArgs
): Promise<boolean> => {
  const { password, email } = resetPassword.input;
  try {
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return false;
    }

    const hash = bcrypt.hashSync(password, 10);
    await client.user.update({
      data: {
        password: hash,
      },
      where: {
        email: email,
      },
    });
    return true;
  } catch (error) {
    return error;
  }
};
