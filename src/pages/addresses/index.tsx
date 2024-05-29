import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Card } from "../../components/card";
import { useAddresses } from "../../hooks/useAddress";
import { AddressShipping } from "../../types/address";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import { useAddressFilter } from "../../hooks/useAddressFilter";

export function Addresses() {
  const { addresses, isLoading, error, deleteAddress } = useAddresses();
  const [selectedCard, setSelectedCard] = useState("");
  const [filterText, setFilterText] = useState("");
  const { data } = useAddressFilter(filterText);
  const dataMap = data ? data : addresses;

  const handleDeleteAddress = (id: string) => {
    deleteAddress(id);
  };

  const handleSubmitInputText = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFilterText(event.target.value);
  };

  return (
    <main className="flex flex-col my-12">
      <h1 className="font-bold text-BaseGray900 text-3xl">Endereços</h1>
      <section className="flex justify-between w-full gap-6 mt-8 mb-12">
        <form className="w-full relative">
          <AiOutlineSearch className="absolute left-4 top-4 w-6 h-6 text-BaseGray300" />
          <input
            className="w-full text-base font-medium border-2 rounded-lg py-4 px-12 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
            type="text"
            onChange={handleSubmitInputText}
            placeholder="Pesquise pelo endereço da entrega"
          />
        </form>
        <Link
          className="w-1/4 text-primary text-base font-medium text-center border-2 rounded-lg border-primary py-4 hover:bg-primary hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl"
          to={"/cadastrar-endereco"}
        >
          Novo Endereço
        </Link>
      </section>
      <section className="flex flex-col justify-between w-full gap-6">
        <h1 className="font-bold text-BaseGray900 text-2xl">
          Endereços cadastrados
        </h1>
        <div className="flex flex-col gap-6">
          {isLoading ? (
            <Skeleton count={2} width={"100%"} height={200} className="mb-4" />
          ) : (
            <>
              {dataMap?.map((address: AddressShipping) => (
                <Card
                  key={address.id}
                  data={address}
                  onSelected={() => setSelectedCard(address.id)}
                  isSelected={selectedCard === address.id}
                  onDelete={handleDeleteAddress}
                />
              ))}
            </>
          )}
        </div>
        {dataMap?.length === 0 || error ? (
          <div className="w-full py-16 text-center">
            <p className="text-3xl text-BaseGray900">
              Nenhum endereço cadastrado
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="flex gap-4 self-end">
          <button className=" text-BaseGray900 text-base font-medium text-center border-2 rounded-lg border-BaseGray300 py-2 px-6 hover:bg-BaseGray300  hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl">
            Cancelar
          </button>
          <button className=" text-white text-base font-medium text-center border-2 rounded-lg bg-primary py-2 px-6 hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl">
            Salvar alterações
          </button>
        </div>
      </section>
    </main>
  );
}
