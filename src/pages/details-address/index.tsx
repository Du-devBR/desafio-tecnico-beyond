import { useParams } from "react-router-dom";
import { useAddressId } from "../../hooks/useAddressId";

export function DetailsAddress() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useAddressId(id!);
  if (isLoading) {
    return <p>...carregando</p>;
  }
  console.log(data);

  return (
    <div>
      <h1>Detalhes do endereço</h1>
    </div>
  );
}
