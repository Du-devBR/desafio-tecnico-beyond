import { AddressShipping } from "../types/address";
import api from "./api";

export async function createAddress(payload: AddressShipping): Promise<AddressShipping>{
  return (await api.post('/addresses', payload)).data
}
