import { AddressShipping } from "../types/address";
import api from "./api";

// Service para buscar um endereço da api com base no id passado por paramentro
export async function getAddressById(id: string): Promise<AddressShipping>{
  return (await api.get<AddressShipping>(`/addresses/${id}`)).data
}
