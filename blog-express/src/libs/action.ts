"use server";

import { cookies } from "next/headers";

export const deleteCookies = (name:string) => {
  cookies().delete(name);
};
