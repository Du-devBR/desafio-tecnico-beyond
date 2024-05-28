import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function App() {
  const client = new QueryClient({});
  return (
    <BrowserRouter>
      <QueryClientProvider client={client}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
