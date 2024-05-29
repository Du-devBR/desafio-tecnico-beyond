import { useQuery } from "@tanstack/react-query";
import { getAddressById } from "../service/listAddress";
import { AddressShipping } from "../pages/create-address";


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
