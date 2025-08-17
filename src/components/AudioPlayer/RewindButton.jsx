import { Undo2 } from "lucide-react";

export default function RewindButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
    >
      <Undo2 size={18} />
    </button>
  );
}
