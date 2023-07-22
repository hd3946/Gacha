import { create } from 'zustand'
import Page1 from './app/generate/page1'
import Page2 from './app/generate/page2'

type store = {
  CurrentTabPage: Function
  setTabPage: (Tab: number) => void
}

const useStore = create<store>()((set) => ({
  // CurrentTabPage: () => { },
  CurrentTabPage: Page1,
  // setTabPage: (Tab) => set((state) => ({ setTabPage: Tab == 0 ? state.CurrentTabPage = Page1 : state.CurrentTabPage = Page2 }))
  setTabPage: (Tab) =>
    set((state) => ({ setTabPage: Tab === 0 ? (state.CurrentTabPage = Page1) : (state.CurrentTabPage = Page2) }))
}))

export default useStore
