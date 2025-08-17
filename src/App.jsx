import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app/globals.css";
import { Button } from "@/components/ui/button";
import EpisodesList from "./components/EpisodesList";
import { AudioProvider } from "./providers/AudioProvider";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AudioProvider>
        <EpisodesList />
        <div className="fixed inset-x-0 bottom-10">
          <AudioPlayer />
        </div>
      </AudioProvider>
    </QueryClientProvider>
  );
}

export default App;
