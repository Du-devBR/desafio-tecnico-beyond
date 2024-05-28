import logo from "../../assets/images/logo.png";

export function Header() {
  return (
    <header className="pt-12 pb-4 border-b-2 border-BaseGray300">
      <img
        src={logo}
        alt="Logotipo com ilustração de um foguete branco e fundo azul"
      />
    </header>
  );
}
