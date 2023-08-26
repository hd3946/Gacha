import { create } from 'zustand'

export type layerImage = {
  name: string
  url: string
  rarity: number // 1% ~ 100%
  isShow: boolean
}

export type layer = {
  name: string
  imageList: string[]
  rarity: number // 1% ~ 100%
  isShow: boolean
  zIndex: number
}

type layers = {
  layers: layer[]
  addLayer: (arg0: any) => void
  updateLayer: (arg0: number, arg1: any) => void
  removeLayer: (arg0: number) => void
}

export const useLayerStore = create<layers>((set) => ({
  layers: [],

  addLayer: (layer: any) => set((state: { layers: any }) => ({ layers: [...state.layers, layer] })),
  updateLayer: (index: number, updatedLayer: any) =>
    set((state: { layers: any }) => {
      const updatedLayers = [...state.layers]
      updatedLayers[index] = { ...updatedLayer }
      return { layers: updatedLayers }
    }),
  removeLayer: (index: any) =>
    set((state: { layers: any[] }) => ({ layers: state.layers.filter((_, i) => i !== index) }))
}))
