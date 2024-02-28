import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "./sidebar";

const HomePage = async () => {
  const session = await getServerSession()!;
  if (!session) redirect("/");
  return (
    <div className=" h-[100vh]  bg-[url('../public/theme.jpg')] flex items-center   bg-no-repeat bg-cover">
      <Sidebar email={session?.user?.email!} />
    </div>
  );
};
export default HomePage;
