import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAddresses } from "../service/listAllAddresses";
import { AddressShipping } from "../pages/create-address";
import { createAddress } from "../service/createAddress";
import { deleteAddressById } from "../service/deleteAddress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useAddresses(){
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery<AddressShipping[]>({queryKey: ['addresses'], queryFn: getAllAddresses});

  const createNewAddress = useMutation({mutationFn: createAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["addresses"]}),
      toast.success("Cadastrado novo endereço", { autoClose: 1000, onClose: () => navigate("/") })
    },
    onError: () => toast.error("Erro ao registrar endereço", { autoClose: 2000 })
  })

  const deleteAddress = useMutation({mutationFn: deleteAddressById,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["addresses"]}),
      toast.success("Deletado endereço com sucesso!", { autoClose: 2000 })
    },
    onError: () => toast.error("Erro ao deletar endereço", { autoClose: 2000 })
  })
  return{
    addresses: data,
    isLoading,
    error,
    createNewAddress: createNewAddress.mutate,
    deleteAddress: deleteAddress.mutate
  }
}
