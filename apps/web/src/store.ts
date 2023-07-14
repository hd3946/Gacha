import { create } from 'zustand'

type store = {
  count: number
  inc: () => void
}

export const useStore = create<store>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))

export const useDownStore = create<store>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count - 1 }))
}))
