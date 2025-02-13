'use client'
import { signOut } from "next-auth/react";

const LogOutBtn = () => {
  return (
    <button onClick={() => signOut()}>
      <span>Sair</span>
    </button>
  );
};

export default LogOutBtn;