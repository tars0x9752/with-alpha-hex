import { decimalToHexString } from './decimal-to-hex'

type ColorHexDigit = 'RGB' | 'RGBA' | 'RRGGBB' | 'RRGGBBAA'

const MAX_VALUE = 255

export const getColorHexDigit = (colorHex: string): ColorHexDigit | false => {
  const RGB_REGEX = /^#([0-9a-fA-F]){3}$/i
  const RGBA_REGEX = /^#([0-9a-fA-F]){4}$/i
  const RRGGBB_REGEX = /^#([0-9a-fA-F]){6}$/i
  const RRGGBBAA_REGEX = /^#([0-9a-fA-F]){8}$/i

  if (RGB_REGEX.test(colorHex)) {
    return 'RGB'
  }

  if (RGBA_REGEX.test(colorHex)) {
    return 'RGBA'
  }

  if (RRGGBB_REGEX.test(colorHex)) {
    return 'RRGGBB'
  }

  if (RRGGBBAA_REGEX.test(colorHex)) {
    return 'RRGGBBAA'
  }

  return false
}

export const validateAlpha = (alpha: number) => {
  return alpha >= 0 && alpha <= 1
}

/**
 * adds given alpha value to a css color hex.
 *
 * @param colorHex - A css hex color string.
 * @param alpha - Alpha value. A number between 0 and 1, where the number corresponds to 100%(full opacity).
 * @param upperCase - Returned string to be upper case or not. defaults to be true.
 */
export const withAlphaHex = (colorHex: string, alpha: number, upperCase = true) => {
  const colorHexDigit = getColorHexDigit(colorHex)

  if (!colorHexDigit || !validateAlpha(alpha)) {
    return colorHex
  }

  const decimalAlpha = MAX_VALUE * alpha

  const hexAlphaString = decimalToHexString(decimalAlpha)

  const colorHexWithAlpha = `${colorHex}${hexAlphaString}`

  return upperCase ? colorHexWithAlpha.toUpperCase() : colorHexWithAlpha.toLowerCase()
}
