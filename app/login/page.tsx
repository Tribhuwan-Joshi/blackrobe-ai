import bgImg from "@/public/authImg.png";
import { Metadata } from "next";
import Image from "next/image";
import AuthContainer from "../components/AuthContainer";

const Login = () => {
  return (
    <div className=" flex min-h-[100lvh] items-center  bg-no-repeat bg-cover  bg-[url('../public/theme.jpg')]">
      <AuthContainer routeName="login" routeText="Don't have an account?" />
      <div className="hidden flex-[3] md:block bg-cover bg-center bg-[url('../public/authImg.png')]  min-h-[100lvh]  "></div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Login - Blackrobe",
  description: "Login to use blackrobe",
};
export default Login;
