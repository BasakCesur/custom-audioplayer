import { cn, formatHumanTime, formatTime, parseTime } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";

export default function AudioSlider({
  currentTime,
  duration,
  onValueChange,
  onValueCommit,
}) {
  let value = currentTime;
  let max = duration;

  console.log(value, max);

  return (
    <div className="flex gap-2 items-center">
      <Slider
        value={[value]}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
        max={max}
        step={1}
        className={cn("w-[100%]")}
      />

      <span className="text-xs shrink-0 text-muted-foreground">
        {formatTime(value)} / {formatTime(max)}
      </span>
    </div>
  );
}
