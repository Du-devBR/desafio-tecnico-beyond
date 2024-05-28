import { Link } from "react-router-dom";

export function Card() {
  return (
    <div className=" flex flex-col items-start gap-2 w-full py-4 px-8 rounded-lg border-2 border-primary relative">
      <div className="inline-block px-2 rounded-md bg-primary">
        <span className="text-xs text-white font-normal">Terra</span>
      </div>
      <h3 className="text-BaseGray900 text-lg font-semibold">Endereço nome</h3>
      <span className="text-BaseGray900 text-base font-medium">Telefone</span>
      <p className="text-BaseGray900 text-base font-light">
        Rua dos bobos, 0 -São Paulo, Brasil
      </p>
      <div className="flex gap-4">
        <Link
          to={"/endereco/1"}
          className="w text-primary text-base font-medium text-center border-2 rounded-lg border-primary py-2 px-6 hover:bg-primary hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl"
        >
          Editar Endereço
        </Link>
        <button className=" text-red text-base font-medium text-center border-2 rounded-lg border-red py-2 px-6 hover:bg-red hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl">
          Deletar
        </button>
      </div>
      <div className="w-5 h-5 rounded-full bg-primary absolute right-4"></div>
    </div>
  );
}
