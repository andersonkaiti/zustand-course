import { create, type StateCreator } from 'zustand'

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

function logOperations(
  initializer: StateCreator<IStore & IActions>,
): StateCreator<IStore & IActions> {
  return (set, get, api) => {
    const setWithLog: typeof set = (params) => {
      console.log({ params })

      set(params)
    }

    return initializer(setWithLog, get, api)
  }
}

export const useStore = create<IStore & IActions>()(
  logOperations((set) => ({
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
  })),
)
