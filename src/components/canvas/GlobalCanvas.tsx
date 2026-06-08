"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Preload } from "@react-three/drei";
import { useEngineStore } from "@/store/engineStore";

// The 5 Core Engines
import GlobalInfrastructureNetwork from "./engines/GlobalInfrastructureNetwork";
import AIOrchestrationEngine from "./engines/AIOrchestrationEngine";
import EnterpriseDataFlow from "./engines/EnterpriseDataFlow";
import CloudTopology from "./engines/CloudTopology";
import EnterpriseEvolutionEngine from "./engines/EnterpriseEvolutionEngine";

function EngineRouter() {
  const activeEngine = useEngineStore((state) => state.activeEngine);

  switch (activeEngine) {
    case 'GLOBAL_INFRA': return <GlobalInfrastructureNetwork />;
    case 'AI_ORCHESTRATION': return <AIOrchestrationEngine />;
    case 'DATA_FLOW': return <EnterpriseDataFlow />;
    case 'CLOUD_TOPOLOGY': return <CloudTopology />;
    case 'EVOLUTION': return <EnterpriseEvolutionEngine />;
    case 'NONE': return null;
    default: return <GlobalInfrastructureNetwork />;
  }
}

export default function GlobalCanvas() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#020617]">
        <Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}>
          <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 5, 10]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-10, -5, -10]} intensity={0.5} color="#00D4FF" />
        
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={45} near={0.1} far={1000} />
        
          <EngineRouter />
          <Preload all />
        </Canvas>
      </div>
      <div className="fixed inset-0 bg-[#020617]/65 z-[5] pointer-events-none backdrop-blur-[2px]" />
    </>
  );
}
