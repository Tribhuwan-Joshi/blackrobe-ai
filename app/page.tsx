import { Metadata } from "next";
import Image from "next/image";
import Blackrobe from "../public/BlackRobe-logo.png";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Blackrobe",
  description:
    "Welcome to BlackRobe, your trusted ally in crafting legally binding contracts with the power of AI.",
};

const nexa = localFont({
  src: "./fonts/Nexa Bold.otf",
});
const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[url('../public/theme.jpg')] flex items-center justify-center w-[100vw] h-[100vh] bg-no-repeat bg-cover">
      <AuthMask />
    </div>
  );
}

function AuthMask() {
  return (
    <div
      className={`flex flex-col -mt-12 ${nexa.className} items-center gap-8`}
    >
      <Image src={Blackrobe} width={140} alt="logo" priority />
      <p className="uppercase leading-6 font-semibold text-xl md:text-3xl tracking-wide text-white">
        Welcome to Blackrobe
      </p>
      <AuthButtons />
    </div>
  );
}

function AuthButtons() {
  return (
    <div className={`${poppins.className} w-full flex justify-center gap-6`}>
      <button className="text-white bg-[#8738EB] text-xl px-10 py-2 font-semibold rounded-lg ">
        Log In
      </button>
      <button className="text-[#8738EB] border border-[#8738EB] text-xl px-10 py-2 hover:bg-[#8738EB] hover:text-white transition font-semibold rounded-lg ">
        Sign Up
      </button>
    </div>
  );
}
