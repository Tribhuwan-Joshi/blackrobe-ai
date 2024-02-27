import { Metadata } from "next";

import { AuthMask } from "./AuthMask";
import { getServerSession } from "next-auth";
import authOptions from "./auth/authOptions";
import HomePage from "./home/page";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Welcome to BlackRobe, your trusted ally in crafting legally binding contracts with the power of AI.",
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/home");
  }
  return (
    <div className="h-[100vh]  bg-[url('../public/theme.jpg')]  flex items-center justify-center  bg-no-repeat bg-cover">
      <AuthMask />
    </div>
  );
}
