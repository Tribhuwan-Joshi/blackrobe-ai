import prisma from "@/prisma/index";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const contract = await prisma.contract.findUnique({
      where: { id: params.id },
    });
    if (!contract) return NextResponse.json({}, { status: 404 });

    await prisma.contract.delete({ where: { id: params.id } });
    console.log("Deleted succ");
    return NextResponse.json({}, { status: 200 });
  } catch (err) {
    console.log("Error");
    return NextResponse.json({ error: err }, { status: 500 });
  }
}