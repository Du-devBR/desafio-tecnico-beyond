import { Navigate, Route, Routes } from "react-router-dom";
import { Addresses } from "../pages/addresses";
import { CreateAddress } from "../pages/create-address";
import { DetailsAddress } from "../pages/details-address";
import { Layout } from "../layout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={"/enderecos"} />} />
        <Route path="/enderecos" element={<Addresses />} />
        <Route path="/cadastrar-endereco" element={<CreateAddress />} />
        <Route path="/endereco/:id" element={<DetailsAddress />} />
        <Route />
      </Route>
    </Routes>
  );
}
