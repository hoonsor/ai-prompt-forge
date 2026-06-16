import { create } from 'zustand';

interface PromptState {
  corePrompt: string;
  selectedOptions: Set<string>;
  setCorePrompt: (prompt: string) => void;
  toggleOption: (optionId: string) => void;
  clearOptions: () => void;
  resetAll: () => void;
}

export const usePromptStore = create<PromptState>((set) => ({
  corePrompt: '',
  selectedOptions: new Set(),
  
  setCorePrompt: (prompt) => set({ corePrompt: prompt }),
  
  toggleOption: (optionId) => set((state) => {
    const newOptions = new Set(state.selectedOptions);
    if (newOptions.has(optionId)) {
      newOptions.delete(optionId);
    } else {
      newOptions.add(optionId);
    }
    return { selectedOptions: newOptions };
  }),
  
  clearOptions: () => set({ selectedOptions: new Set() }),
  
  resetAll: () => set({ corePrompt: '', selectedOptions: new Set() }),
}));
