"use client";

import { signIn } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import Spinner from "./Spinner";

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
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const handleContinue = async (e: any) => {
    e.preventDefault();
    const validate = schema.safeParse({ email, password });
    if (!email) {
      setError("Provide Email");
      return;
    }
    if (!validate.success) {
      if (password.length < 8)
        setError("Password should be atleast 8 characters long");
      else setError("Provide valid Credentials");
      return;
    }
    try {
      if (pathname === "/signup") {
        setProcessing(true);
        // Register a new user if it's the signup page
        const res = await axios.post("/api/register", { email, password });
        setProcessing(false);
        if (res.status == 201) {
          await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
          router.push("/home");
        }
        // Handle successful registration, e.g., show a success message or redirect the user
      } else {
        // Log in the user if it's the login page
        try {
          setProcessing(true);

          const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
          });
          setProcessing(false);
          if (res?.status == 401) setError("Invalid Credentials");
          else router.push("/home");

          // Handle successful login, e.g., show a success message or redirect the user
        } catch (err: any) {
          setProcessing(false);

          setError(err);
        }
      }
    } catch (error: any) {
      // Handle errors, e.g., display error messages to the user
      setProcessing(false);
      if (error.response.status == 409) setError("Email Already Exist.");
      else setError("Server error occured. Please try again.");
    }
  };

  return (
    <div className="flex w-full space-y-6 flex-col">
      <form
        autoComplete="false"
        className="w-full min-w-max gap-3 flex flex-col"
      >
        <input
          autoFocus={true}
          autoComplete="off"
          name="email"
          className="rounded-lg  text-white autofill:active:!bg-transparent autofill:focus:bg-transparent! placeholder-white bg-transparent focus:placeholder-opacity-60 outline-none  py-[8px] px-3 inset-1  border border-[#8738EB]"
          placeholder="Email address *"
          type="email"
          required
          onChange={(e) => {
            setError("");
            setEmail(e.target.value);
          }}
        />

        <div
          className=" flex items-center    rounded-lg
border border-[#8738EB] py-[8px] px-3 inset-1 justify-between "
        >
          <input
            name="password"
            className="max-w-full  text-white  placeholder-white focus:placeholder-opacity-60 outline-none   bg-transparent "
            placeholder="Password *"
            minLength={8}
            type={show ? "text" : "password"}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
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
        {error ? <p className="text-red-300">{error}</p> : <></>}
        <button
          disabled={processing}
          onClick={handleContinue}
          className={`${
            processing ? "cursor-not-allowed" : ""
          } text-white py-2 active:bg-[#802bf0] bg-[#8738EB] rounded-md p-1`}
        >
          Continue {processing ? <Spinner /> : ""}
        </button>
      </form>
    </div>
  );
}
