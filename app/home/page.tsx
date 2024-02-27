import { Session } from "inspector";
import { getServerSession } from "next-auth";
import LogoutBtn from "../components/Logout";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const session = await getServerSession()!;
  if (!session) redirect("/");
  return (
    <div className=" h-[100vh]  bg-[url('../public/theme.jpg')] flex items-center justify-center  bg-no-repeat bg-cover">
      <p className="text-white">Welcome {session?.user?.email}</p>
      <LogoutBtn />
    </div>
  );
};
export default HomePage;
