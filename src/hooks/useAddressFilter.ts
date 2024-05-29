import { useQuery } from "@tanstack/react-query";
import { AddressShipping } from "../types/address";
import { getAddressByFilter } from "../service/listAddressByFilter";


export function useAddressFilter(text: string){

  const {data, isLoading} = useQuery<AddressShipping[]>({
    queryKey: ['address', text],
    queryFn: () => getAddressByFilter(text),
    });

  return {
    data,
    isLoading
  }
}
