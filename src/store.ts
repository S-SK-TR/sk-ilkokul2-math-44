import { create } from 'zustand';

interface MathState {
  scores: number[];
  addScore: (score: number) => void;
}

const useStore = create<MathState>((set) => ({
  scores: [],
  addScore: (score) => set((state) => ({
    scores: [...state.scores, score]
  })),
}));

export default useStore;