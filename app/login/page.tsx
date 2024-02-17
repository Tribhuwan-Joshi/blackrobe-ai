import bgImg from "@/public/authImg.png";
import { Metadata } from "next";
import Image from "next/image";
import AuthContainer from "./AuthContainer";

const Login = () => {
  return (
    <div className="max-h-[100vh] flex items-center  bg-no-repeat bg-cover  bg-[url('../public/theme.jpg')]">
      <AuthContainer />
      <div className=" hidden max-h-[100vh]  md:flex flex-[4] ">
        <Image src={bgImg} className="bg-center  max-h-full" alt="bg-img" />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Login - Blackrobe",
  description: "Login to use blackrobe",
};
export default Login;
