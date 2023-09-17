import { create } from 'zustand'

export type layerImageType = {
  key: string
  name: string
  url: Blob // -> blob url
  rarity: number // 1% ~ 100%
  isShow: boolean
}

export type layerType = {
  id: string
  name: string
  imageList: layerImageType[]
  rarity: number // 1% ~ 100%
  isShow: boolean
}

export type layerStoreType = {
  layers: layerType[]
  splitLayer: (arg0: number, arg1: number) => void
  addLayer: (arg0: layerType) => void
  updateLayer: (arg0: number, arg1: layerType) => void
  removeLayer: (arg0: number) => void
}

export const useLayerStore = create<layerStoreType>((set) => ({
  layers: [] as layerType[],
  addLayer: (layer: layerType) => set((state: { layers: layerType[] }) => ({ layers: [...state.layers, layer] })),
  splitLayer: (index: number, splitIndex: number) =>
    set((state: { layers: layerType[] }) => {
      const updatedLayers = [...state.layers]
      const [targetItem] = updatedLayers.splice(index, 1)
      updatedLayers.splice(splitIndex, 0, targetItem)
      return { layers: updatedLayers }
    }),
  updateLayer: (index: number, updatedLayer: layerType) =>
    set((state: { layers: layerType[] }) => {
      const updatedLayers = [...state.layers]
      updatedLayers[index] = { ...updatedLayer }
      return { layers: updatedLayers }
    }),
  removeLayer: (index: number) =>
    set((state: { layers: layerType[] }) => ({ layers: state.layers.filter((_, i) => i !== index) }))
}))

export type layerFocusStoreType = {
  divFocus: { [key: string]: boolean }
  addDiv: () => void
  removeDiv: (arg0: string | number) => void
  handleFocus: (arg0: number) => void
}

export const useLayerFocusStore = create<layerFocusStoreType>((set) => ({
  divFocus: {} as any,
  addDiv: () => {
    set((state: any) => {
      const newDivId = Object.keys(state.divFocus).length
      return { divFocus: { ...state.divFocus, [newDivId]: false } }
    })
  },
  removeDiv: (divId: string | number) => {
    set((state: any) => {
      const updatedDivFocus = { ...state.divFocus }
      delete updatedDivFocus[divId]
      return { divFocus: updatedDivFocus }
    })
  },
  handleFocus: (divId: number) => {
    set((state: any) => {
      const updatedDivFocus = { ...state.divFocus }
      updatedDivFocus[divId] = true
      Object.keys(updatedDivFocus).forEach((key) => {
        if (parseInt(key) !== divId) {
          updatedDivFocus[key] = false
        }
      })
      return { divFocus: updatedDivFocus }
    })
  }
}))
