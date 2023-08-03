import { create } from 'zustand'

type store = {
  count: number
  inc: () => void
}

export const useStore = create<store>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))

type tabValueStore = {
  value: number
  setValue: (arg0: number) => void
}

export const useTabValueStore = create<tabValueStore>((set) => ({
  value: 0,
  setValue: (num) => set({ value: num })
}))
