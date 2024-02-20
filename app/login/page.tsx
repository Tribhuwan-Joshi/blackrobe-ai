import bgImg from "@/public/authImg.png";
import { Metadata } from "next";
import Image from "next/image";
import AuthContainer from "../components/AuthContainer";

const Login = () => {
  return <AuthContainer routeName="login" routeText="Don't have an account?" />;
};

export const metadata: Metadata = {
  title: "Login - Blackrobe",
  description: "Login to use blackrobe",
};
export default Login;
