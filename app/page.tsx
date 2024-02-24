import { Metadata } from "next";

import { AuthMask } from "./AuthMask";
import { getServerSession } from "next-auth";
import authOptions from "./auth/authOptions";

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
  if (session) return <h1>Home</h1>;
  return (
    <div className="bg-[url('../public/theme.jpg')] flex items-center justify-center  bg-no-repeat bg-cover">
      <AuthMask />
    </div>
  );
}
