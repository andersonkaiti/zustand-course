import { create } from 'zustand'

// the store is outside the react's tree
export const useStore = create((set, get) => ({
  counter: 0,
  // increment: () => set({ counter: get().counter + 1 }),
  increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
}))
