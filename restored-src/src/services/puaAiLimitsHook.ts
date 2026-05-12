import { useEffect, useState } from 'react'
import {
  type PuaAILimits,
  currentLimits,
  statusListeners,
} from './puaAiLimits.js'

export function usePuaAiLimits(): PuaAILimits {
  const [limits, setLimits] = useState<PuaAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: PuaAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
