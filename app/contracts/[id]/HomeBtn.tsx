"use client";
import { IoMdHome } from "react-icons/io";
import { useRouter } from "next/navigation";

const HomeBtn = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
    router.refresh();
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 flex gap-3 items-center text-white p-2 rounded-md"
    >
      <IoMdHome /> Home
    </button>
  );
};
export default HomeBtn;
