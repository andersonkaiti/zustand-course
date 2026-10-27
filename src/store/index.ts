import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

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
  devtools(
    persist(
      (set) => ({
        counter: 0,
        user: {
          username: 'andersonkaiti',
        },
        increment: () =>
          set(
            (prevState) => ({
              counter: prevState.counter + 1,
            }),
            false,
            'counter-increment',
          ),
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
    {
      enabled: import.meta.env.DEV,
      name: 'Global store',
      store: 'global',
    },
  ),
)
