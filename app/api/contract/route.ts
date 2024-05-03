import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import prisma from "@/prisma";
import { Contract } from "@prisma/client";

const openai = new OpenAI();
async function getResponse(info: { text: string }) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content:
          "You will only and only create template for legal contract without responding with extra response. Your response should only contain the legal contract with respect to the info(having questions and answers) asked by user. And Please provide enlosed by div tag. with proper formatting of contract document",
      },
      {
        role: "user",
        content: `Create an extremely pricised and personalized and  legal contract by analyzing the following questionaries in correct format -  ${info.text}`,
      },
    ],
    model: "gpt-4-0125-preview",
  });

  return response.choices[0].message.content;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const aiResponse = await getResponse(body);
  const contract: Contract = await prisma.contract.create({
    data: { content: aiResponse!, userEmail: session.user?.email! },
  });

  return NextResponse.json({ aiResponse, contract }, { status: 201 });
}
