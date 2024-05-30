import { useQuery} from "@tanstack/react-query";
import { AddressShipping } from "../types/address";
import { getAddressByFilter } from "../service/listAddressByFilter";


/**
 * Hook customizado para filtrar endereços com base em um texto.
 *
 * Este hook utiliza a função `getAddressByFilter` para buscar endereços que correspondem ao filtro fornecido.
 *
 * @param {string} text - O texto para filtrar os endereços.
 * @returns {Object} Um objeto contendo os endereços filtrados e o estado de carregamento.
 * @returns {AddressShipping[] | undefined} data - A lista de endereços filtrados.
 * @returns {boolean} isLoading - Indica se os endereços estão sendo carregados.
 */

export function useAddressFilter(text: string){

  const {data, isLoading} = useQuery<AddressShipping[]>({
    queryKey: ['addresses', text],
    queryFn: () => getAddressByFilter(text),
  });

  return {
    data,
    isLoading
  }
}
