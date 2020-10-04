import { MAX_VALUE } from './constants'
import { validateAlpha } from './validation'
import { getRRGGBB } from './hex-color'
import { decimalToHexString } from './radix'

/**
 * adds given alpha value to a css hex color.
 *
 * @param hexColor - A css hex color string.
 * @param alpha - Alpha value. A number between 0 and 1, where the number corresponds to 100%(full opacity).
 * @param upperCase - Returned string to be upper case or not. defaults to be true.
 */
export const withAlphaHex = (hexColor: string, alpha: number, upperCase = true): string => {
  if (!validateAlpha(alpha)) {
    throw new Error('Invalid alpha. Alpha should be a number between 0 and 1.')
  }

  const decimalAlpha = MAX_VALUE * alpha

  const alphaHex = decimalToHexString(decimalAlpha)

  const rrggbbHex = getRRGGBB(hexColor)

  const hexColorWithAlpha = `#${rrggbbHex}${alphaHex}`

  return upperCase ? hexColorWithAlpha.toUpperCase() : hexColorWithAlpha.toLowerCase()
}
