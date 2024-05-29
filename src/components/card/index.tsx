import { Link } from "react-router-dom";
import { AddressShipping } from "../../pages/create-address";

interface AddressData {
  data: AddressShipping;
  onDelete: (id: string) => void;
}
export function Card({ data, onDelete }: AddressData) {
  return (
    <div className=" flex flex-col items-start gap-2 w-full py-4 px-8 rounded-lg border-2 border-primary relative">
      <div className="inline-block px-2 rounded-md bg-primary">
        <span className="text-xs text-white font-normal">{data.planet}</span>
      </div>
      <h3 className="text-BaseGray900 text-lg font-semibold">{data.product}</h3>
      <span className="text-BaseGray900 text-base font-medium">
        {data.phone}
      </span>
      <p className="text-BaseGray900 text-base font-light">
        {data.address} {data.location}
      </p>
      <div className="flex gap-4">
        <Link
          to={`/endereco/${data.id}`}
          className="w text-primary text-base font-medium text-center border-2 rounded-lg border-primary py-2 px-6 hover:bg-primary hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl"
        >
          Editar Endereço
        </Link>
        <button
          onClick={() => onDelete(data.id)}
          className=" text-red text-base font-medium text-center border-2 rounded-lg border-red py-2 px-6 hover:bg-red hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl"
        >
          Deletar
        </button>
      </div>
      <div className="w-5 h-5 rounded-full bg-primary absolute right-4"></div>
    </div>
  );
}
