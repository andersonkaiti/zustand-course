import { create } from 'zustand'

interface IStore {
  counter: number
}

interface IActions {
  increment: () => void
}

// when at least one generic is defined, the others stop being inferred. to
// work around this, zustand uses a curried function (a function that returns
// another function) that receives the generic, allowing the store to declare
// a generic without losing type inference.
export const useStore = create<IStore & IActions>()((set) => ({
  counter: 0,
  increment: () => set((prevState) => ({ counter: prevState.counter + 1 })),
}))
