import { useForm } from "react-hook-form";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAddresses } from "../../hooks/useAddress";

export interface AddressShipping {
  id: string;
  planet: string;
  product: string;
  storage_code: string;
  zip_code: string;
  phone: string;
  country?: string;
  state?: string;
  city?: string;
  address?: string;
  location?: string;
}

export function CreateAddress() {
  const { register, handleSubmit, watch } = useForm<AddressShipping>();
  const { createNewAddress } = useAddresses();

  const planet = watch("planet", "");

  const handleSubmmitNewAddress = (data: AddressShipping) => {
    createNewAddress(data);
  };

  return (
    <main className="flex flex-col my-12">
      <div className="flex gap-4 items-center">
        <Link
          className="border-2 p-1 rounded-md border-BaseGray300 hover:bg-BaseGray300 duration-500"
          to={"/"}
        >
          <AiOutlineLeft />
        </Link>
        <h1 className="font-bold text-BaseGray900 text-3xl">
          Cadastrar endereço para envio
        </h1>
      </div>
      <section className="flex justify-between w-full gap-6 mt-12 mb-12">
        <form
          action=""
          className="flex flex-col w-full gap-6"
          onSubmit={handleSubmit(handleSubmmitNewAddress)}
        >
          <div className="w-full relative flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-lg font-semibold text-BaseGray900"
            >
              Planeta
            </label>
            <select
              id=""
              className="max-w-max text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
              {...register("planet")}
            >
              <option value="">Selecionar planeta</option>
              <option value="terra">Terra</option>
              <option value="marte">Marte</option>
            </select>
          </div>
          <div className="w-full relative flex flex-col gap-2 ">
            <label
              htmlFor=""
              className="text-lg font-semibold text-BaseGray900 "
            >
              Produto
            </label>
            <input
              className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
              type="text"
              disabled={planet === "" ? true : false}
              {...register("product")}
            />
          </div>
          <div className="w-full relative flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-lg font-semibold text-BaseGray900"
            >
              Código de armazenamento
            </label>
            <input
              className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
              type="text"
              disabled={planet === "" ? true : false}
              {...register("storage_code")}
            />
          </div>
          <div className="flex gap-4">
            <div className="max-w-max relative flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-lg font-semibold text-BaseGray900"
              >
                Código postal
              </label>
              <input
                className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                type="text"
                disabled={planet === "" ? true : false}
                {...register("zip_code")}
              />
            </div>
            <div className="max-w-max relative flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-lg font-semibold text-BaseGray900"
              >
                Telefone
              </label>
              <input
                className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                type="text"
                disabled={planet === "" ? true : false}
                {...register("phone")}
              />
            </div>
          </div>
          {planet === "terra" ? (
            <>
              <div className="flex gap-4">
                <div className="w-full relative flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-lg font-semibold text-BaseGray900"
                  >
                    País
                  </label>
                  <input
                    className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                    type="text"
                    {...register("country")}
                  />
                </div>
                <div className="w-full relative flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-lg font-semibold text-BaseGray900"
                  >
                    Estado
                  </label>
                  <input
                    className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                    type="text"
                    {...register("state")}
                  />
                </div>
                <div className="w-full relative flex flex-col gap-2">
                  <label
                    htmlFor=""
                    className="text-lg font-semibold text-BaseGray900"
                  >
                    Cidade
                  </label>
                  <input
                    className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                    type="text"
                    {...register("city")}
                  />
                </div>
              </div>
              <div className="w-full relative flex flex-col gap-2">
                <label
                  htmlFor=""
                  className="text-lg font-semibold text-BaseGray900"
                >
                  Endereço
                </label>
                <input
                  className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                  type="text"
                  {...register("address")}
                />
              </div>
            </>
          ) : (
            <div className="max-w-max relative flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-lg font-semibold text-BaseGray900"
              >
                Lote
              </label>
              <input
                className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray900 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
                type="text"
                disabled={planet === "" ? true : false}
                {...register("location")}
              />
            </div>
          )}
          <div className="flex gap-4 self-end">
            <Link
              to={"/"}
              className=" text-BaseGray900 text-base font-medium text-center border-2 rounded-lg border-BaseGray300 py-2 px-6 hover:bg-BaseGray300  hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl"
            >
              Cancelar
            </Link>
            <button className=" text-white text-base font-medium text-center border-2 rounded-lg bg-primary py-2 px-6 hover:text-white hover:shadow-2xl duration-500 focus:shadow-BaseGray700 focus:shadow-2xl">
              Cadastrar endereço
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
