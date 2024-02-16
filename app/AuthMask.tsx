import Image from "next/image";
import Blackrobe from "../public/Blackrobe-logo.png";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import Link from "next/link";

export const nexa = localFont({
  src: "./fonts/Nexa Bold.otf",
});
const poppins = Poppins({ weight: ["600"], subsets: ["latin"] });

export function AuthMask() {
  return (
    <div
      className={`flex flex-col justify-center -mt-12 ${nexa.className} items-center gap-8`}
    >
      <Image src={Blackrobe} width={128} alt="logo" priority />
      <p className="uppercase text-center leading-6 font-semibold text-xl md:text-3xl tracking-wide text-white">
        Welcome to Blackrobe
      </p>
      <AuthButtons />
    </div>
  );
}

export function AuthButtons() {
  return (
    <div className={`${poppins.className} w-full flex justify-center gap-6`}>
      <Link href="/login">
        <button className="text-white active:bg-[#8a3af3] bg-[#8738EB] text-xl px-6 md:px-10 py-2 font-semibold rounded-lg ">
          Log In
        </button>
      </Link>

      <Link href="/signup">
        <button className="text-[#8738EB] active:bg-[#8a3af3] border border-[#8738EB] text-xl px-6 md:px-10 py-2 hover:bg-[#8738EB] hover:text-white transition font-semibold rounded-lg ">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
