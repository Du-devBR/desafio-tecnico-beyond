import { AddressShipping } from "../types/address";
import api from "./api";

export async function updateAddress(payload: AddressShipping): Promise<AddressShipping>{
  return (await api.put(`/addresses/${payload.id}`, payload)).data
}
