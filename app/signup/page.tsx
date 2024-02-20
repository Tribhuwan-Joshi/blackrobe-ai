import bgImg from "@/public/authImg.png";
import { Metadata } from "next";
import Image from "next/image";
import AuthContainer from "../components/AuthContainer";

const SignUp = () => {
  return (
    <AuthContainer routeName="signup" routeText="Already have an account?" />
  );
};

export const metadata: Metadata = {
  title: "Sign up - Blackrobe",
  description: "create new account on blackrobe",
};
export default SignUp;
