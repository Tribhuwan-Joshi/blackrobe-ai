import Image from "next/image";
import LogoutBtn from "../components/Logout";
import Blackrobe from "@/public/Blackrobe-typo.png";
import Link from "next/link";
import prisma from "@/prisma";
import { getServerSession } from "next-auth";
import { MdEmail } from "react-icons/md";
const Sidebar = async ({ email }: { email: string }) => {
  const session = await getServerSession()!;
  const contracts = await prisma.contract.findMany({
    where: { userEmail: session?.user?.email! },
  });
  return (
    <div className=" hidden py-6 sm:flex justify-between items-center flex-col bg-black text-white min-w-[200px] w-1/5 h-full mr-auto">
      <Image width={198} className="mx-auto" src={Blackrobe} alt="logo" />

      <div className="space-y-4 h-full w-full mt-12 flex flex-col items-center">
        <h2 className="text-xl">Your Contracts</h2>
        <div className="flex max-h-[70%] items-center w-full overflow-auto flex-col gap-4">
          {contracts.map((c, i) => {
            return (
              <Link
                key={c.id}
                className="hover:underline"
                href={`/contracts/${c.id}`}
              >
                {i + 1}. Contract
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p>Plan type - Free</p>
        <p>Contract(s) left - 3</p>
        <p> {email}</p>
        <LogoutBtn />
        <div className="flex gap-3 items-center my-3">
          <MdEmail size={20} />
          <Link className="hover:underline" href="mailto:Info@deepware.org">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
export const dynamic = "force-dynamic";
