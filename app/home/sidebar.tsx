import Image from "next/image";
import LogoutBtn from "../components/Logout";
import Blackrobe from "@/public/Blackrobe-typo.png";
import Link from "next/link";
import { getServerSession } from "next-auth";
import axios from "axios";
const Sidebar = async ({ email }: { email: string }) => {
  const session = await getServerSession()!;

  return (
    <div className=" hidden py-6 sm:flex justify-between items-center flex-col bg-black text-white min-w-[200px] w-1/5 h-full mr-auto">
      <Image width={198} className="mx-auto" src={Blackrobe} alt="logo" />
      <div className="space-y-4 h-full w-full mt-12 flex flex-col items-center">
        <h2 className="text-xl">Your Contracts</h2>
        <div className="flex max-h-[70%] items-center w-full overflow-auto flex-col gap-4">
          <Link href="/" className="hover:underline">
            Contract 1
          </Link>
          <Link href="/" className="hover:underline">
            Contract 2
          </Link>
          <Link href="/" className="hover:underline">
            Contract 3
          </Link>
          <Link href="/" className="hover:underline">
            Contract 4
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p> {email}</p>
        <LogoutBtn />
      </div>
    </div>
  );
};
export default Sidebar;
