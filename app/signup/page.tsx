import bgImg from "@/public/authImg.png";
import { Metadata } from "next";
import Image from "next/image";
import AuthContainer from "../components/AuthContainer";

const SignUp = () => {
  return (
    <div className="max-h-[100vh] flex items-center  bg-no-repeat bg-cover  bg-[url('../public/theme.jpg')]">
      <AuthContainer routeName="signup" routeText="Already have an account?" />
      <div className="hidden flex-[3] md:block bg-cover bg-center bg-[url('../public/authImg.png')]  min-h-[100lvh]  "></div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Sign up - Blackrobe",
  description: "create new account on blackrobe",
};
export default SignUp;
