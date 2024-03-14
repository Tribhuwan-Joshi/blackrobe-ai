import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
async function getResponse(info: string) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "assistant",
        content:
          "You will only and only create template for legal contract without responding with extra tag. Your response should only contain the legal contract with respect to the conditions asked by user. And Please provide enlosed by div tag",
      },
      {
        role: "user",
        content: `create and fill the required blank by understanding these question and user responses- ${info}`,
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return response.choices[0].message.content;
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const aiResponse = await getResponse(body);

  return NextResponse.json(aiResponse, { status: 201 });
}
