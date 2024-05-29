import { AddressShipping } from "../types/address";
import api from "./api";

export async function getAllAddresses(): Promise<AddressShipping[]>{
  return (await api.get<AddressShipping[]>('/addresses')).data
}
