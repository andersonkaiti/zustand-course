import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

interface IStore {
  counter: number
  user: {
    name: string
    email: string
    username: string
  }
}

interface IActions {
  increment: () => void
  setUsername: (username: string) => void
}

export const useStore = create<IStore & IActions>()(
  devtools(
    immer((set) => ({
      counter: 0,
      user: {
        name: 'Anderson',
        email: 'anderkaiti@gmail.com',
        username: 'andersonkaiti',
      },
      increment: () =>
        set((prevState) => ({
          counter: prevState.counter + 1,
        })),
      setUsername: (username: string) =>
        set((prevState) => {
          prevState.user.username = username
        }),
    })),
  ),
)
