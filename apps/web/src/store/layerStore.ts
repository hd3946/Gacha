import { create } from 'zustand'

export type layerImage = {
  name: string
  url: string
  rarity: number // 1% ~ 100%
  isShow: boolean
}

export type layerType = {
  id: number
  name: string
  imageList: string[]
  rarity: number // 1% ~ 100%
  isShow: boolean
}

export type layerStore = {
  layers: layerType[]
  splitLayer: (arg0: number, arg1: number) => void
  addLayer: (arg0: layerType) => void
  updateLayer: (arg0: number, arg1: layerType) => void
  removeLayer: (arg0: number) => void
}

export const useLayerStore = create<layerStore>((set) => ({
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
