import type { IStoreSlice } from '../store'

interface ICounterStore {
  value: number
}

interface ICounterActions {
  increment: () => void
}

export interface ICounterSlice extends ICounterStore, ICounterActions {}

export const createCounterSlice: IStoreSlice<ICounterSlice> = (set) => ({
  value: 0,
  increment: () =>
    set((prevState) => {
      prevState.counter.value++
    }),
})
