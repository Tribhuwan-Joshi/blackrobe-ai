"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import googleIcon from "@/public/Google.png";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
// BorderAnimation component for the border animation effect
const BorderAnimation = () => (
  <>
    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
    <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
    <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
  </>
);

export default function OAuthBtn({
  text,
  provider,
}: {
  text: string;
  provider: string;
}) {
  const router = useRouter();

  const handleClick = async () => {
    try {
      setTimeout(async () => await signIn(provider), 0);
      router.push("/");
    } catch (err) {
      console.error("Error occurred:", err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex p-2 md:py-3 min-w-max group flex-col justify-center relative border border-[#8738EB] rounded-md"
    >
      <div className="flex gap-2 items-center">
        {provider === "google" ? (
          <Image src={googleIcon} width={20} alt="Google Icon" />
        ) : (
          <FaGithub size="22" color="white" />
        )}
        <p className="text-white whitespace-nowrap">
          <BorderAnimation />
          {text}
        </p>
      </div>
    </button>
  );
}
