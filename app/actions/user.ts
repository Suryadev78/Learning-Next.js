"use server";
import prisma from "@/app/db";
import { error } from "console";
export async function signup() {
  try {
    const res = await prisma.user.findFirst();
    return res;
  } catch (e) {
    throw error("error: " + e);
  }
}
