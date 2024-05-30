import { AddressShipping } from "../types/address";
import api from "./api";

// Service para buscar todos os endereços da api, porem é feito um filtro com base nos
// atributos address para Terra e lcoation para marte

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
