import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAddresses } from "../service/listAllAddresses";
import { createAddress } from "../service/createAddress";
import { deleteAddressById } from "../service/deleteAddress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { updateAddress } from "../service/updateAddress";
import { AddressShipping } from "../types/address";

/**
 * Hook customizado para gerenciar endereços.
 *
 * Este hook fornece funcionalidades para listar, criar, atualizar e deletar endereços.
 * Ele também lida com a exibição de notificações e navegação após certas ações, utilizando Toastfy.
 *
 * @returns {Object} Um objeto contendo os endereços, estado de carregamento, erro, e métodos de CRUD.
 * @returns {AddressShipping[] | undefined} addresses - A lista de endereços.
 * @returns {boolean} isLoading - Indica se os endereços estão sendo carregados.
 * @returns {unknown} error - Qualquer erro que ocorreu ao carregar os endereços.
 * @returns {function} createNewAddress - Função para criar um novo endereço.
 * @returns {function} updateAddressId - Função para atualizar um endereço.
 * @returns {function} deleteAddress - Função para deletar um endereço.
 */

export function useAddresses(){
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery<AddressShipping[]>({queryKey: ['addresses'], queryFn: getAllAddresses});

  const createNewAddress = useMutation({mutationFn: createAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['addresses']}),
      toast.success("Cadastrado novo endereço", { autoClose: 1000, onClose: () => navigate("/") })
    },
    onError: () => toast.error("Erro ao registrar endereço", { autoClose: 2000 })
  })

  const updateAddressId = useMutation({mutationFn: updateAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['addresses']}),
      toast.success("Endereço atualizado com sucesso!", { autoClose: 1000, onClose: () => navigate("/") })
    },
    onError: () => toast.error("Erro ao atualizar endereço", { autoClose: 2000 })
  })

  const deleteAddress = useMutation({mutationFn: deleteAddressById,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['addresses']}),
      toast.success("Deletado endereço com sucesso!", { autoClose: 2000 })
    },
    onError: () => toast.error("Erro ao deletar endereço", { autoClose: 2000 })
  })
  return{
    addresses: data,
    isLoading,
    error,
    createNewAddress: createNewAddress.mutate,
    updateAddressId: updateAddressId.mutate,
    deleteAddress: deleteAddress.mutate
  }
}
