import { getServerSession } from "next-auth";
import authOptions from "../auth/authOptions";
import Image from "next/image";
import pfp from "@/public/user-pfp.png";

const UserReply = async ({ text }: { text: string }) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="user-reply self-end items-center  flex   gap-4 text-lg bg-[#8638ebcb] p-2 max-w-max  md:w-[80%]  rounded-md text-white ">
      {session?.user?.image ? (
        <Image width={36} src={session.user.image} alt="pfp" />
      ) : (
        <Image
          width={36}
          className="bg-white rounded-full"
          src={pfp}
          alt="default pfp"
        />
      )}
      {text}
    </div>
  );
};
export default UserReply;