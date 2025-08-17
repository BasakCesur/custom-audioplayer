import { Volume, VolumeX } from "lucide-react";

export default function MuteButton({ isMuted, onToggleMute }) {
  const Icon = isMuted ? VolumeX : Volume;
  return (
    <button
      onClick={onToggleMute}
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
    >
      <Icon size={18} />
    </button>
  );
}
