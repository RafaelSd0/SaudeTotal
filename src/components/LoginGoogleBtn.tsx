'use client'

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const LogingBtn = () => {
  return (
    <button 
      onClick={() => signIn("google", {callbackUrl: "/test"})} 
      className="w-[100%] rounded-lg border border-gray-700 flex gap-3 items-center justify-center py-3 hover:bg-slate-300 transition duration-200"
    >
      <FaGoogle /><span >Login com o Google</span>
    </button>
  );
};

export default LogingBtn;