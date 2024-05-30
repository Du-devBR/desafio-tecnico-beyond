import { AddressShipping } from "../types/address";
import api from "./api";

// Service para registrar um novo endereço na api
export async function createAddress(payload: AddressShipping): Promise<AddressShipping>{
  return (await api.post('/addresses', payload)).data
}
