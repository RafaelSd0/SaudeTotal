import  Link  from "next/link";
import { getServerSession } from "next-auth";
import LogOutBtn from "./LogOutBtn";
import LoginBtn from "./LoginBtn";
import MobileMenu from "./MobileMenu";


export default async function Header() {

  const session = await getServerSession()

  return (
    <header className="flex items-center justify-between md:px-14 border-b shadow-md shadow-gray-300 border-b-gray-700 fixed top-0 left-0 z-50 h-16 w-full bg-slate-50 ">
      <p className="pl-3 md:pl-0">logo</p>
      <div className="md:flex items-center gap-6 hidden">
        <Link href={"/home"} className="link">
        <span> Inicio </span>
        </Link>
        <Link href={"/"} className="link">
        <span> Agendar </span>
        </Link>
        <Link href={"/"} className="link">
        <span> Sobre </span>
        </Link>
        <Link href={"/"} className="link pr-4">
        <span> Suporte </span>
        </Link>
      </div>
      <div className="md:block hidden">
        {!session ? <LoginBtn/> : <LogOutBtn/>}
      </div>
      <MobileMenu/>
    </header>
  );
};