import { Metadata } from "next";

import { AuthMask } from "./AuthMask";
import { getServerSession } from "next-auth";
import authOptions from "./auth/authOptions";
import LogoutBtn from "./components/Logout";

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
  if (session)
    return (
      <div className="bg-[url('../public/theme.jpg')]  flex items-center justify-center h-[100vh] w-[100vw] bg-no-repeat bg-cover">
        <div className="bg-white">
          Welcome {JSON.stringify(session.user?.email)}
        </div>
        <LogoutBtn />
      </div>
    );
  return (
    <div className="bg-[url('../public/theme.jpg')] flex items-center justify-center  bg-no-repeat bg-cover">
      <AuthMask />
    </div>
  );
}
