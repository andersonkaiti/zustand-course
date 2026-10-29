import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { createCounterSlice } from './slices/counter-slice'
import { createUserSlice } from './slices/user-slice'
import type { IStore } from './store'

export const useStore = create<IStore>()(
  devtools(
    immer((...params) => ({
      counter: createCounterSlice(...params),
      user: createUserSlice(...params),
    })),
  ),
)
