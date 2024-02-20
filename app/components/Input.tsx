"use client";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
export default function Input() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex w-full space-y-6 flex-col">
      <div className="w-full  gap-3 flex flex-col">
        <input
          className="rounded-lg  text-white  placeholder-white focus:placeholder-opacity-60 outline-none  py-[8px] px-3 inset-1 bg-transparent border border-[#8738EB]"
          placeholder="Email address"
          type="email"
          required
        />

        <div
          className=" flex items-center    rounded-lg
border border-[#8738EB] py-[8px] px-3 inset-1 justify-between "
        >
          <input
            className="max-w-full  text-white  placeholder-white focus:placeholder-opacity-60 outline-none   bg-transparent "
            placeholder="Password"
            type={show ? "text" : "password"}
          />
          <button onClick={() => setShow((prev) => !prev)}>
            {show ? (
              <FaRegEye color="white" />
            ) : (
              <FaRegEyeSlash color="white" />
            )}
          </button>
        </div>
      </div>
      <button className="text-white py-2 active:bg-[#802bf0] bg-[#8738EB] rounded-md p-1">
        Continue
      </button>
    </div>
  );
}
