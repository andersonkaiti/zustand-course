import type { StateCreator } from 'zustand'
import type { ICounterSlice } from './slices/counter-slice'
import type { IUserSlice } from './slices/user-slice'

export type Middleware = [['zustand/devtools', never], ['zustand/immer', never]]

export interface IStore {
  user: IUserSlice
  counter: ICounterSlice
}

export interface IStoreSlice<TSlice>
  extends StateCreator<IStore, Middleware, [], TSlice> {}
