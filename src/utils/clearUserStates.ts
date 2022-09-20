import { configureScope } from '@sentry/nextjs'
import { Dispatch } from '@reduxjs/toolkit'
import { resetUserState } from 'state/global/actions'
import { connectorLocalStorageKey } from '@pancakeswap/uikit'
import { LS_ORDERS } from './localStorageOrders'
import getLocalStorageItemKeys from './getLocalStorageItemKeys'

export const clearUserStates = (dispatch: Dispatch<any>, chainId: number, isDeactive = false) => {
  dispatch(resetUserState({ chainId }))
  configureScope((scope) => scope.setUser(null))
  // Only clear localStorage when user disconnect,switch address no need clear it.
  if (isDeactive) {
    window?.localStorage?.removeItem(connectorLocalStorageKey)
  }
  const lsOrderKeys = getLocalStorageItemKeys(LS_ORDERS)
  lsOrderKeys.forEach((lsOrderKey) => window?.localStorage?.removeItem(lsOrderKey))
}
