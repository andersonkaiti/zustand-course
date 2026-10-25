import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

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

export const useStore = create<IStore & IActions>()(
  persist(
    (set) => ({
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
    }),
    {
      name: '@zustand-course/store',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
