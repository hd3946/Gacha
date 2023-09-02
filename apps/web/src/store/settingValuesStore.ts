import { create } from 'zustand'

interface SettingValues {
  collectionName: string
  collectionDescription: string
  collectionSize: number
  nameOfEachNFT: string
  exportFormat: string
  blockchain: string
  artwork: any
  artworkArray: Array<File | null>

  setCollectionName: (val: string) => void
  setCollectionDescription: (val: string) => void
  setCollectionSize: (val: number) => void
  setNameOfEachNFT: (val: string) => void
  setExportFormat: (val: string) => void
  setBlockchain: (val: string) => void
  setArtwork: (val: any) => void
  setArtworkArray: (val: Array<File | null>) => void
}

const SettingValuesStore = create<SettingValues>((set) => ({
  collectionName: '',
  collectionDescription: '',
  collectionSize: 2,
  nameOfEachNFT: '',
  exportFormat: 'webp',
  blockchain: '1',
  artwork: '',
  artworkArray: [],

  setCollectionName: (val) => {
    set((state) => ({ collectionName: val }))
  },
  setCollectionDescription: (val) => {
    set((state) => ({ collectionDescription: val }))
  },
  setCollectionSize: (val) => {
    set((state) => ({ collectionSize: val }))
  },
  setNameOfEachNFT: (val) => {
    set((state) => ({ nameOfEachNFT: val }))
  },
  setExportFormat: (val) => {
    set((state) => ({ exportFormat: val }))
  },
  setBlockchain: (val) => {
    set((state) => ({ blockchain: val }))
  },
  setArtwork: (val) => {
    set((state) => ({ artwork: val }))
  },
  setArtworkArray: (val) => {
    set((state) => ({ artworkArray: val }))
  }
}))

export default SettingValuesStore
