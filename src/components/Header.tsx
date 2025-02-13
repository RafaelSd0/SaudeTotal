import  Link  from "next/link";
import { getServerSession } from "next-auth";
import LogOutBtn from "./LogOutBtn";
import LoginBtn from "./LoginBtn";

export default async function Header() {

  const session = await getServerSession()

  return (
    <header className="flex items-center justify-between px-5 py-3">
      <p>logo</p>
      <div className="flex items-center gap-5">
        <Link href={"/"}>
        <span> Agendar </span>
        </Link>
        <Link href={"/"}>
        <span> Sobre </span>
        </Link>
        <Link href={"/"}>
        <span> Contato </span>
        </Link>
        {!session ? <LoginBtn/> : <LogOutBtn/>}
      </div>
    </header>
  );
};