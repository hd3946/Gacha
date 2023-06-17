import { create } from 'zustand'

type store = {
  count: number
  inc: () => void
}

const useStore = create<store>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 }))
}))

export default useStore
