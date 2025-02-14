import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between md:px-14 px-6 border-t shadow-md shadow-gray-300 border-t-gray-700 w-full bg-slate-50 py-4 mt-10">
      {/* Logo e Direitos Autorais */}
      <div className="text-center md:text-left">
        <p className="text-gray-700">&copy; {new Date().getFullYear()} Saúde Total. Todos os direitos reservados.</p>
      </div>

      {/* Links de navegação */}
      <nav className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
        <Link href={"/"} className="text-gray-700 hover:text-gray-900 transition">Início</Link>
        <Link href={"/"} className="text-gray-700 hover:text-gray-900 transition">Agendar</Link>
        <Link href={"/"} className="text-gray-700 hover:text-gray-900 transition">Sobre</Link>
        <Link href={"/"} className="text-gray-700 hover:text-gray-900 transition">Suporte</Link>
      </nav>
    </footer>
  );
};

export default Footer;
