import { AddressShipping } from "../types/address";
import api from "./api";

export async function deleteAddressById(id: string){
  return (await api.delete<AddressShipping>(`/addresses/${id}`))
}
