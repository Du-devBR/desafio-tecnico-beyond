import { AddressShipping } from "../pages/create-address";
import api from "./api";

export async function deleteAddressById(id: string){
  return (await api.delete<AddressShipping>(`/addresses/${id}`))
}
