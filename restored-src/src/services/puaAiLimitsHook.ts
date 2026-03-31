import { useEffect, useState } from 'react'
import {
  type PUAAILimits,
  currentLimits,
  statusListeners,
} from './puaAiLimits.js'

export function usePUAAiLimits(): PUAAILimits {
  const [limits, setLimits] = useState<PUAAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: PUAAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
