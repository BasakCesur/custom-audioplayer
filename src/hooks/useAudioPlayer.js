import { useContext, useMemo } from "react";
import { AudioPlayerContext } from "../providers/AudioProvider";

export function useAudioPlayer(episode) {
  let player = useContext(AudioPlayerContext);
  if (!player) {
    throw new Error("useAudioPlayer must be used within an AudioProvider");
  }

  return useMemo(
    () => ({
      ...player,
      play() {
        player.play(episode);
      },
      toggle() {
        player.toggle(episode);
      },
      get playing() {
        return player.isPlaying(episode);
      },
    }),
    [player, episode]
  );
}
