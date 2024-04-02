import prisma from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { email } = await req.json();

  try {
    await prisma.$connect();
    const existingUser = await prisma.user.findUnique({
      where: { email: email! },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" });
    } else {
      return NextResponse.json({ message: "Email is available" });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Server error occurred" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
