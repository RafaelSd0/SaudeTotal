'use client'
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const LogOutBtn = () => {
  return (
    <Button onClick={() => signOut()} className=" bg-red-600 hover:bg-red-500 rounded-3xl">
      <span>Sair</span>
    </Button>
  );
};

export default LogOutBtn;