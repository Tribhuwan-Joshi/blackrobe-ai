import Image from "next/image";
import logo from "@/public/Blackrobe-logo.png";
import { Open_Sans } from "next/font/google";
import googleIcon from "@/public/Google.png";
import linkedinIcon from "@/public/linkedin.png";
import Link from "next/link";
import OAuthBtn from "./OAuthBtn";
import AuthPageCrousel from "./AuthPageCrousel";
import Input from "./Input";

const openSans = Open_Sans({ subsets: ["latin"] });

const AuthContainer = ({
  routeName,
  routeText,
}: {
  routeName: string;
  routeText: string;
}) => {
  return (
    <div className=" flex min-h-[100lvh] items-center  bg-no-repeat bg-cover  bg-[url('../public/theme.jpg')]">
      <div className="flex-[2] h-[100vh]    flex-col flex items-center ">
        <Image src={logo} alt="logo" className="w-16 my-6 md:my-16 md:w-20" />
        <div className="flex-col w-1/2  flex gap-3 md:gap-4">
          <h2
            className={`${openSans.className} text-center mb-4 md:mb-6 font-semibold text-2xl md:text-3xl text-white`}
          >
            {routeName == "login" ? "Log In" : "Create your account"}
          </h2>
          <Input />
          <p className="text-[#a8a6a6] whitespace-nowrap">
            {routeText}
            <Link
              href={routeName == "login" ? "/signup" : "/login"}
              className="hover:underline  cursor-pointer ml-2"
            >
              {routeName == "login" ? "Sign up" : "Log in"}
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

        <div className="my-3  md:my-6 w-1/2 flex flex-col space-y-4">
          <OAuthBtn imgSrc={googleIcon} text="Continue with Google" />
          <OAuthBtn imgSrc={linkedinIcon} text="Continue with LinkedIn" />
        </div>
      </div>
      <AuthPageCrousel />
    </div>
  );
};

export default AuthContainer;
