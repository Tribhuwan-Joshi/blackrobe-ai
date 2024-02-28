import Image from "next/image";
import LogoutBtn from "../components/Logout";
import Blackrobe from "@/public/Blackrobe-typo.png";
const Sidebar = ({ email }: { email: string }) => {
  return (
    <div className="py-6 flex justify-between items-center flex-col bg-black text-white w-1/5 h-full mr-auto">
      <Image width={198} className="mx-auto" src={Blackrobe} alt="logo" />
      <div className="flex flex-col items-center gap-4">
        <p> {email}</p>
        <LogoutBtn />
      </div>
    </div>
  );
};
export default Sidebar;
