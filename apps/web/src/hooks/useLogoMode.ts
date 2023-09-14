import { useEffect, useState } from 'react'
import useColorMode from './useColorMode'

const useLogoMode = () => {
  const [colorMode, setColorMode] = useColorMode()
  const [logo, setLogo] = useState('/images/NFTArtGeneratorbyonemintblue.webp')

  useEffect(() => {
    if (colorMode === 'light') {
      setLogo('/images/NFTArtGeneratorbyonemintblue.webp')
    } else {
      setLogo('/images/logo.png')
    }
  }, [colorMode])

  return [logo, colorMode, setColorMode]
}

export default useLogoMode
