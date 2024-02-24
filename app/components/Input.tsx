"use client";

import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
export default function Input() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex w-full space-y-6 flex-col">
      <form className="w-full  gap-3 flex flex-col">
        <input
          name="email"
          className="rounded-lg  text-white  placeholder-white focus:placeholder-opacity-60 outline-none  py-[8px] px-3 inset-1 bg-transparent border border-[#8738EB]"
          placeholder="Email address"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <div
          className=" flex items-center    rounded-lg
border border-[#8738EB] py-[8px] px-3 inset-1 justify-between "
        >
          <input
            name="password"
            className="max-w-full  text-white  placeholder-white focus:placeholder-opacity-60 outline-none   bg-transparent "
            placeholder="Password"
            minLength={8}
            type={show ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setShow((prev) => !prev);
            }}
          >
            {show ? (
              <FaRegEye color="white" />
            ) : (
              <FaRegEyeSlash color="white" />
            )}
          </button>
        </div>
        <button className="text-white py-2 active:bg-[#802bf0] bg-[#8738EB] rounded-md p-1">
          Continue
        </button>
      </form>
    </div>
  );
}
