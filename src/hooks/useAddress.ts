import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAddresses } from "../service/listAllAddresses";
import { AddressShipping } from "../pages/create-address";
import { createAddress } from "../service/createAddress";
import { deleteAddressById } from "../service/deleteAddress";

export function useAddresses(){
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery<AddressShipping[]>({queryKey: ['addresses'], queryFn: getAllAddresses});

  const createNewAddress = useMutation({mutationFn: createAddress,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["addresses"]}),
    onError: () => alert("Erro ao cadastrar tarefa")
  })

  const deleteAddress = useMutation({mutationFn: deleteAddressById,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["addresses"]}),
    onError: () => alert("Erro ao cadastrar tarefa")
  })
  return{
    addresses: data,
    isLoading,
    error,
    createNewAddress: createNewAddress.mutate,
    deleteAddress: deleteAddress.mutate
  }
}
