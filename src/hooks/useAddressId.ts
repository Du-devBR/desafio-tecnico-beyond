import { useQuery } from "@tanstack/react-query";
import { getAddressById } from "../service/listAddress";
import { AddressShipping } from "../types/address";

/**
 * Hook customizado para obter um endereço específico pelo ID.
 *
 * Este hook utiliza a função `getAddressById` para buscar um endereço específico baseado no ID fornecido.
 *
 * @param {string} id - O ID do endereço a ser buscado.
 * @returns {Object} Um objeto contendo o endereço buscado e o estado de carregamento.
 * @returns {AddressShipping | undefined} data - O endereço obtido.
 * @returns {boolean} isLoading - Indica se o endereço está sendo carregado.
 */

export function useAddressId(id: string){

  const {data, isLoading} = useQuery<AddressShipping>({
    queryKey: ['address', id],
    queryFn: () => getAddressById(id),
    });

  return {
    data,
    isLoading
  }
}
