import { create } from 'zustand';

export type EngineType = 'GLOBAL_INFRA' | 'AI_ORCHESTRATION' | 'DATA_FLOW' | 'CLOUD_TOPOLOGY' | 'EVOLUTION' | 'NONE';

interface EngineState {
  activeEngine: EngineType;
  setActiveEngine: (engine: EngineType) => void;
  // Allows fine-grained control over the global infrastructure map
  activeIndustryLayer: string | null;
  setActiveIndustryLayer: (layer: string | null) => void;
}

export const useEngineStore = create<EngineState>((set) => ({
  activeEngine: 'GLOBAL_INFRA',
  setActiveEngine: (engine) => set({ activeEngine: engine }),
  activeIndustryLayer: null,
  setActiveIndustryLayer: (layer) => set({ activeIndustryLayer: layer }),
}));
