import crypto from "crypto-js";
import { Prisma, PrismaClient } from "@prisma/client";

const db = new PrismaClient();

const createSetting = async (data?: Prisma.SettingCreateInput) => {
  data ||= {
    userPasswordSecret: "duang",
  };
  await db.setting.create({ data });
};

const createUser = async (data?: Prisma.UserCreateInput) => {
  const setting = await db.setting.findFirst();
  const password = crypto.AES.encrypt(
    "duang",
    setting?.userPasswordSecret || "dunag"
  ).toString();
  data ||= {
    account: "dunag",
    name: "duang",
    password,
  };
  if (!data?.password) {
    data = {
      ...data,
      password,
    };
    await db.user.create({ data });
  }

  // console.log(password); // 'my message'
};

const initData = async () => {
  try {
    await createSetting({
      userPasswordSecret: "duang",
    });
    await createUser({
      account: "dunag",
      name: "duang",
    });
  } catch (err) {
    console.log(err);
  }
};
initData();
