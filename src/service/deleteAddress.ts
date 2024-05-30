import { AddressShipping } from "../types/address";
import api from "./api";

// Service para deletar um endereço da api com base em seu id
export async function deleteAddressById(id: string){
  return (await api.delete<AddressShipping>(`/addresses/${id}`))
}
