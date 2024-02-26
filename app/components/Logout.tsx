"use client";

import { signOut } from "next-auth/react";

const LogoutBtn = () => {
  return (
    <div className="bg-white p-2 rounded-md mx-4">
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
export default LogoutBtn;
