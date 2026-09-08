"use client";

import { ReactNode, useState } from "react";
import ProvidersGSAP from "./providersGSAP";
import ProvidersMotion from "./providersMotion";
import EngineToggle from "@/components/ui/EngineToggle";
import { TransitionEngine } from "@/types/TransitionEngine.types";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    const [engine, setEngine] = useState<TransitionEngine>("motion");

    const handleEngineChange = (nextEngine: TransitionEngine) => {
        setEngine(nextEngine);
    };

    const TransitionProvider =
        engine === "gsap" ? ProvidersGSAP : ProvidersMotion;

    return (
        <>
            <EngineToggle engine={engine} onEngineChange={handleEngineChange} />
            <TransitionProvider>{children}</TransitionProvider>
        </>
    );
}

export default Providers;