import Image, { StaticImageData } from "next/image";
import logo from "@/public/Blackrobe-logo.png";
import { Open_Sans } from "next/font/google";
import googleIcon from "@/public/Google.png";
import linkedinIcon from "@/public/linkedin.png";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

const AuthContainer = () => {
  return (
    <div className="flex-[3] w-full    flex-col flex items-center ">
      <Image src={logo} alt="logo" className="w-16 my-16 md:w-20" />
      <div className="flex-col w-1/2  flex gap-4">
        <h2
          className={`${openSans.className} text-center mb-6 font-semibold text-2xl md:text-3xl text-white`}
        >
          Create your account
        </h2>
        <Input />
        <p className="text-[#a8a6a6] whitespace-nowrap">
          Already have an account?{" "}
          <Link href="/login" className="hover:underline  cursor-pointer ml-2">
            Log in
          </Link>
        </p>
        <div className="flex items-center mt-4">
          <div className="bg-gray-300 flex-1 h-[0.7px]"></div>
          <span
            className={`${openSans.className} bg-transparent text-[#a8a6a6] mx-1`}
          >
            OR
          </span>
          <div className="bg-gray-300 flex-1 h-[0.7px]"></div>
        </div>
      </div>
      <hr />
      <div className="my-6 w-1/2 flex flex-col space-y-4">
        <OAuthBtn imgSrc={googleIcon} text="Continue with Google" />
        <OAuthBtn imgSrc={linkedinIcon} text="Continue with LinkedIn" />
      </div>
    </div>
  );
};

function Input() {
  return (
    <div className="flex w-full space-y-6 flex-col">
      <input
        className="rounded-lg  text-white  placeholder-white focus:placeholder-opacity-60 outline-none  py-[8px] px-3 inset-1 bg-transparent border border-[#8738EB]"
        placeholder="Email address"
      />
      <button className="text-white py-2 active:bg-[#802bf0] bg-[#8738EB] rounded-md p-1">
        Continue
      </button>
    </div>
  );
}

function OAuthBtn({ text, imgSrc }: { text: string; imgSrc: StaticImageData }) {
  return (
    <button className="flex p-2 py-3  group flex-col justify-center relative border border-[#8738EB] rounded-md ">
      <div className="flex gap-2  items-center">
        <Image src={imgSrc} width={20} alt="icon" />
        <p className="text-white">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-700 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-700 group-hover:h-full"></span>
          {text}
        </p>
      </div>
    </button>
  );
}
export default AuthContainer;
