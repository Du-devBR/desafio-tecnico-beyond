import { AddressShipping } from "../types/address";
import api from "./api";

export async function getAddressById(id: string): Promise<AddressShipping>{
  return (await api.get<AddressShipping>(`/addresses/${id}`)).data
}
