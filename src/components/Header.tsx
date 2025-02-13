import  Link  from "next/link";

const Header = () => {
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
        <div>
          <span>login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;