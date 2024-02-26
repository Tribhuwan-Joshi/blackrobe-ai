import prisma from "@/prisma";
export const connectToDB = async () => {
  try {
    await prisma?.$connect();
  } catch (error) {
    throw new Error("Unable to Connect to DB");
  }
};
