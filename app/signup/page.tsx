import { Metadata } from "next";
import AuthContainer from "../components/AuthContainer";
import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <AuthContainer routeName="signup" routeText="Already have an account?" />
  );
};

export const metadata: Metadata = {
  title: "Sign up - Blackrobe",
  description: "create new account on blackrobe",
};
export default SignUp;
