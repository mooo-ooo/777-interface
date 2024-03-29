import { BigNumber } from '@ethersproject/bignumber'
import { useMemo } from 'react'
import { DEFAULT_DEADLINE_FROM_NOW } from 'config/constants'
import useCurrentBlockTimestamp from './useCurrentBlockTimestamp'

// combines the block timestamp with the user setting to give the deadline that should be used for any submitted transaction
export default function useTransactionDeadline(): BigNumber | undefined {
  const blockTimestamp = useCurrentBlockTimestamp()
  return useMemo(() => {
    if (blockTimestamp) return blockTimestamp.add(DEFAULT_DEADLINE_FROM_NOW)
    return undefined
  }, [blockTimestamp])
}
