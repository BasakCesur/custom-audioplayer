import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import PlayButton from "./PlayButton";
import RewindButton from "./RewindButton";
import ForwardButton from "./ForwardButton";
import PlaybackRateButton from "./PlaybackRateButton";
import MuteButton from "./MuteButton";
import AudioSlider from "./AudioSlider";
import { useEffect, useState } from "react";

const SEEK_AMOUNT = 10;
export default function AudioPlayer() {
  let player = useAudioPlayer();
  const [currentTime, setCurrentTime] = useState(player.currentTime || 0);

  useEffect(() => {
    setCurrentTime(player.currentTime);
  }, [player.currentTime]);

  if (!player.episode) return null;

  const onRewind = () => {
    player.seekBy(-SEEK_AMOUNT);
  };

  const onFastForward = () => {
    player.seekBy(SEEK_AMOUNT);
  };

  const onToggleMute = () => {
    player.toggleMute();
  };

  const onPlaybackRateChange = (rate) => {
    player.playbackRate(rate);
  };

  const onPlayToggle = () => {
    player.toggle();
  };

  return (
    <div className="flex items-center max-w-4xl mx-auto rounded-full gap-6 bg-white px-4 py-4 shadow shadow-slate-100/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6">
      <PlayButton isPlaying={player.playing} onPlayToggle={onPlayToggle} />
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-white font-bold text-md">
          {player.episode?.title}
        </h2>
        <div className="flex items-center justify-between gap-6 flex-1">
          <div className="flex items-center gap-2">
            <RewindButton onClick={onRewind} />
            <ForwardButton onClick={onFastForward} />
          </div>

          <div className="flex-1">
            <AudioSlider
              currentTime={currentTime || player.currentTime}
              duration={player.duration}
              onValueChange={(value) => player.seekTo(value)}
              onValueCommit={(value) => player.seekTo(value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <PlaybackRateButton onPlaybackRateChange={onPlaybackRateChange} />
            <MuteButton isMuted={player.muted} onToggleMute={onToggleMute} />
          </div>
        </div>
      </div>
    </div>
  );
}
