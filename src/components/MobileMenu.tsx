import  Link  from "next/link";
import { getServerSession } from "next-auth";
import LogOutBtn from "./LogOutBtn";
import LoginBtn from "./LoginBtn";
import { IoMenuOutline } from "react-icons/io5";



export default async function MobileMenu() {

  const session = await getServerSession()

  return (
    <div className="relative md:hidden">
      {/* Checkbox que controla a visibilidade do menu */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      {/* Botão do menu (label controla o checkbox) */}
      <label
        htmlFor="menu-toggle"
        className="p-2 rounded-md cursor-pointer block"
      >
        <IoMenuOutline size={32} />
      </label>

      {/* Menu Dropdown (é exibido quando o checkbox está marcado) */}
      <div className="absolute top-14 right-0 w-48 bg-slate-50 shadow-lg rounded-md p-2 hidden peer-checked:block text-center">
        <ul className="space-y-4">
          <li className="link-mobile">
            <Link href={"/home"} >
              <span> Inicio </span>
            </Link>
          </li>
          <li className="link-mobile">
            <Link href={"/home"} >
              <span> Agendar </span>
            </Link>
          </li>
          <li className="link-mobile">
            <Link href={"/home"} >
              <span> Sobre </span>
            </Link>
          </li>
          <li className="link-mobile">
            <Link href={"/home"} >
              <span> Suporte </span>
            </Link>
          </li>
          {!session ? <LoginBtn/> : <LogOutBtn/>}
        </ul>
      </div>
      {/*
      <div className="md:flex items-center gap-6 hidden">
        
        <Link href={"/"} className="link">
        <span> Agendar </span>
        </Link>
        <Link href={"/"} className="link">
        <span> Sobre </span>
        </Link>
        <Link href={"/"} className="link pr-4">
        <span> Contato </span>
        </Link>
      </div>
      <div className="md:block hidden">
        
      */}
    </div>
  );
}
