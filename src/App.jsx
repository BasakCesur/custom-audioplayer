import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app/globals.css";
import { Button } from "@/components/ui/button";
import EpisodesList from "./components/EpisodesList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <EpisodesList />
    </QueryClientProvider>
  );
}

export default App;
