import  Link  from "next/link";
import { getServerSession } from "next-auth";
import LogOutBtn from "./LogOutBtn";
import LoginBtn from "./LoginBtn";
import MobileMenu from "./MobileMenu";
import Image from "next/image";


export default async function Header() {

  const session = await getServerSession()

  return (
    <header className="flex items-center justify-between md:px-14 border-b shadow-lg shadow-gray-700 border-b-gray-700 fixed top-0 left-0 z-50 h-16 w-full bg-slate-50 ">
      <Link href={"/"}>
        <Image src={"/Logo Saude Total.svg"} alt="logo" width={75} height={75} />
      </Link>
      <div className="md:flex items-center gap-6 hidden">
        <Link href={"/"} className="link">
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