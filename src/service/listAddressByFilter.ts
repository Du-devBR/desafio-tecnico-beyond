import { AddressShipping } from "../types/address";
import api from "./api";

export async function getAddressByFilter(text: string): Promise<AddressShipping[]>{
  const allAddreses = (await api.get<AddressShipping[]>(`/addresses/`)).data

  if(!text){
    return allAddreses
  }
  const textLowerCase = text.toLowerCase()
  return allAddreses.filter((address) =>
    address.address?.toLowerCase().includes(textLowerCase) ||
    address.location?.toLowerCase().includes(textLowerCase)
  )
}
