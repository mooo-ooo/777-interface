import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const GAME_ITEM_WIDTH_WEB = 212
export const GAME_ITEM_WIDTH_MOBILE = 160
export const GAME_ITEM_HEIGHT_WEB = 196
export const GAME_ITEM_HEIGHT_MOBILE = 150

export const BASE_BSC_SCAN_URL = 'https://bscscan.com'
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
