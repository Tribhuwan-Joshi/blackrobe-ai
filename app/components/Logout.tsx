"use client";

import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <div className="bg-white text-base text-black max-w-max p-1 rounded-md mx-4">
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
export default LogoutBtn;
