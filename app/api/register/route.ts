import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDB } from "@/app/helpers/db";
import prisma from "@/prisma";

export const POST = async (req: NextRequest) => {
  try {
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    const user = await prisma.user.findUnique({ where: { email } });
    if (user)
      return NextResponse.json(
        { error: "Email already exist" },
        { status: 409 }
      );
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDB();
    const newUser = await prisma?.user.create({
      data: {
        email,
        hashedPassword,
      },
    });

    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
