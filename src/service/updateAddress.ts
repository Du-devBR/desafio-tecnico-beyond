import { AddressShipping } from "../types/address";
import api from "./api";

// Service para editar um endereço na api com base no id passado url
export async function updateAddress(payload: AddressShipping): Promise<AddressShipping>{
  return (await api.put(`/addresses/${payload.id}`, payload)).data
}
