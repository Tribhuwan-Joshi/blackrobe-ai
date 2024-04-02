import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "./sidebar";
import ChatContainer from "./ChatContainer";

const HomePage = async () => {
  const session = await getServerSession()!;
  if (!session) redirect("/");

  return (
    <div className=" h-[100vh] p-2 sm:p-0  bg-[url('../public/theme.jpg')]  flex items-center   bg-no-repeat bg-cover">
      <Sidebar email={session.user?.email!} />
      <ChatContainer />
    </div>
  );
};
export default HomePage;
