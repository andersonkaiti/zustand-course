import { create } from 'zustand'

interface IStore {
  counter: number
  user: {
    username: string
  }
}

interface IActions {
  increment: () => void
  setUsername: (username: string) => void
}

export const useStore = create<IStore & IActions>()((set) => ({
  counter: 0,
  user: {
    username: 'andersonkaiti',
  },
  increment: () =>
    set((prevState) => ({
      counter: prevState.counter + 1,
    })),
  setUsername: (username: string) =>
    set({
      user: { username },
    }),
}))
