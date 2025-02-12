import  Link  from "next/link";

const Header = () => {
  return (
    <header>
      <p>logo</p>
      <div>
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
          <span>Cadastro</span>
        </div>
      </div>
    </header>
  );
};

export default Header;