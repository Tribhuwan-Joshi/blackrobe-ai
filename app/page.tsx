import { Metadata } from "next";

import { AuthMask } from "./AuthMask";

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Welcome to BlackRobe, your trusted ally in crafting legally binding contracts with the power of AI.",
};

export default function Home() {
  return (
    <div className="bg-[url('../public/theme.jpg')] flex items-center justify-center w-[100vw] h-[100vh] bg-no-repeat bg-cover">
      <AuthMask />
    </div>
  );
}
