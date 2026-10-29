import type { IStoreSlice } from '../store'

interface IUserStore {
  data: {
    name: string
    email: string
    username: string
  }
}

interface IUserActions {
  setUsername: (username: string) => void
}

export interface IUserSlice extends IUserStore, IUserActions {}

export const createUserSlice: IStoreSlice<IUserSlice> = (set) => ({
  data: {
    name: 'Anderson',
    email: 'anderkaiti@gmail.com',
    username: 'andersonkaiti',
  },
  setUsername: (username: string) =>
    set((prevState) => {
      prevState.user.data.username = username
    }),
})
