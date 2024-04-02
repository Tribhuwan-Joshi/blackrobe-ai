"use client";
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
      className="bg-blue-500 text-white p-2 rounded-md"
    >
      Home
    </button>
  );
};
export default HomeBtn;
