import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app/globals.css";
import { Button } from "@/components/ui/button";
import EpisodesList from "./components/EpisodesList";
import { AudioProvider } from "./providers/AudioProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AudioProvider>
        <EpisodesList />
      </AudioProvider>
    </QueryClientProvider>
  );
}

export default App;
