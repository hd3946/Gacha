import { useEffect, useState } from 'react'

function useAnimationFrame(): boolean {
  const [enabled, setEnabled] = useState<boolean>(false)

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true))

    return () => {
      cancelAnimationFrame(animation)
      setEnabled(false)
    }
  }, [])

  return enabled
}

export default useAnimationFrame
