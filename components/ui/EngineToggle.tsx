import { TransitionEngine } from "@/types/TransitionEngine.types";
import { cn } from "cn";

interface Engine {
    id: TransitionEngine;
    label: string;
}

const ENGINES: Engine[] = [
    { id: "motion", label: "Motion" },
    { id: "gsap", label: "GSAP" },
];

interface EngineToggleProps {
    engine: TransitionEngine;
    onEngineChange: (engine: TransitionEngine) => void;
}

const EngineToggle = ({ engine, onEngineChange }: EngineToggleProps) => (
    <div className="fixed top-4 right-4 z-300 flex flex-col items-end gap-2">
        <p className="px-2 text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Transition
        </p>
        <div
            role="radiogroup"
            aria-label="Page transition engine"
            className="flex rounded-full border border-black/8 bg-white/90 p-1 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-black/80"
        >
            {ENGINES.map((item) => {
                const isSelected = engine === item.id;

                return (
                    <button
                        key={item.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`Use ${item.label} transitions`}
                        tabIndex={isSelected ? 0 : -1}
                        onClick={() => onEngineChange(item.id)}
                        className={cn(
                            "min-h-11 min-w-20 rounded-full px-4 text-sm font-medium transition-colors transition-bg duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
                            isSelected
                                ? "bg-foreground text-background"
                                : "text-zinc-600 dark:text-zinc-400 hover:bg-black/4 dark:hover:bg-[#1a1a1a]",
                        )}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    </div>
);

export default EngineToggle;
