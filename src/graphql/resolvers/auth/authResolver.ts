import { ResponseType } from "./../../../helper/type/ResponseType";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../../helper/sendEmail";
import {
  LoginInputType,
  RegisterInputType,
} from "helper/type/authType/auth.type";

export const client = new PrismaClient();
export const Login = async ({
  email,
  password,
}: LoginInputType): Promise<ResponseType> => {
  try {
    const person = await client.user.findUnique({
      where: { email },
    });

    if (!person) {
      return {
        error: true,
        message: "User not found",
      };
    }
    if (!person?.active) {
      return {
        error: true,
        message: "User not active",
      };
    }
    const deCode = bcrypt.compareSync(password, person?.password);
    if (deCode) {
      const token = jwt.sign(person, process.env.token_key, {
        expiresIn: "10d",
      });
      return {
        error: false,
        message: token,
      };
    } else {
      return {
        error: true,
        message: "Password incorrect",
      };
    }
  } catch (error) {
    return {
      error: true,
      message: error,
    };
  }
};

export const Register = async ({
  email,
  password,
  username,
}: RegisterInputType): Promise<ResponseType> => {
  try {
    const findUser = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (findUser?.active) {
      return {
        error: true,
        message: "User already exist",
      };
    }
    const hash = bcrypt.hashSync(password, 10);
    await client.user.upsert({
      create: {
        username: username,
        email: email,
        password: hash,
      },
      update: {
        username: username,
        email: email,
        password: hash,
      },
      where: {
        email: email,
      },
    });
    if (await sendEmail(email)) {
      return {
        error: false,
        message: "User created and sms sent",
      };
    } else {
      return {
        error: true,
        message: "User created but sms not sent",
      };
    }
  } catch (error) {
    return error;
  }
};

export const ActiveUser = async (verificationCode: {
  email: string;
  code: number;
}): Promise<boolean> => {
  const { code, email } = verificationCode;
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

export const ForgetPassword = async (email: string): Promise<ResponseType> => {
  try {
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return {
        error: true,
        message: "User not found",
      };
    }
    const generateLink = await sendEmail(email);
    if (generateLink) {
      return {
        message: "SMS send",
      };
    }
  } catch (error) {
    return error;
  }
};
export const CheckCode = async (
  email: string,
  code: number
): Promise<ResponseType> => {
  try {
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return {
        error: true,
        message: "User not found",
      };
    }
    if (user.code == code) {
      return {
        error: false,
        message: "Code correct",
      };
    }
  } catch (error) {
    return error;
  }
};

export const ResetPassword = async (
  email: string,
  password: string
): Promise<ResponseType> => {
  try {
    const user = await client.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      return {
        error: true,
        message: "User not found",
      };
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
    return {
      error: false,
      message: "Password reset",
    };
  } catch (error) {
    return error;
  }
};
