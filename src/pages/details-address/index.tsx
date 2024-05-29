import { Link, useParams } from "react-router-dom";
import { useAddressId } from "../../hooks/useAddressId";
import { useForm } from "react-hook-form";
import { AiOutlineLeft } from "react-icons/ai";
import { useAddresses } from "../../hooks/useAddress";
import { AddressShipping } from "../../types/address";

export function DetailsAddress() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useAddressId(id!);
  const { updateAddressId } = useAddresses();
  const { register, handleSubmit, reset, setValue } =
    useForm<AddressShipping>();

  if (data) {
    setValue("id", data.id);
    setValue("planet", data.planet);
    setValue("product", data.product);
    setValue("storage_code", data.storage_code);
  }

  if (isLoading) {
    return <p>...carregando</p>;
  }

  const handleSubmmitAlterAddress = (data: AddressShipping) => {
    updateAddressId(data);
    reset();
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
          Alterar endereço endereço para envio
        </h1>
      </div>
      <section className="flex justify-between w-full gap-6 mt-12 mb-12">
        <form
          action=""
          className="flex flex-col w-full gap-6"
          onSubmit={handleSubmit(handleSubmmitAlterAddress)}
        >
          <div className="w-full relative flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-lg font-semibold text-BaseGray700"
            >
              Planeta
            </label>
            <select
              id=""
              disabled
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
              className="text-lg font-semibold text-BaseGray700 "
            >
              Produto
            </label>
            <input
              className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray700 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
              type="text"
              disabled
              {...register("product")}
            />
          </div>
          <div className="w-full relative flex flex-col gap-2">
            <label
              htmlFor=""
              className="text-lg font-semibold text-BaseGray700"
            >
              Código de armazenamento
            </label>
            <input
              className="w-full text-base font-medium border-2 rounded-lg p-4 text-BaseGray700 placeholder:text-BaseGray300 focus:shadow-BaseGray700 focus:shadow-2xl duration-300"
              type="text"
              disabled
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
                {...register("phone")}
              />
            </div>
          </div>
          {data?.planet === "terra" ? (
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
              Alterar endereço
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
