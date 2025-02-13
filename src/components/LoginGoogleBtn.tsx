'use client'

import { signIn } from "next-auth/react";

const LogingBtn = () => {
  return (
    <button >
      <span onClick={() => signIn("google", {callbackUrl: "/test"})}>LoginGoogleBtn</span>
    </button>
  );
};

export default LogingBtn;