import { Play, Pause } from "lucide-react";
import { Button } from "../ui/button.jsx";

export default function PlayButton({ isPlaying, onPlayToggle }) {
  let Icon = isPlaying ? Pause : Play;
  return (
    <button onClick={onPlayToggle}>
      <Icon />
    </button>
  );
}
