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

export const decimalToHexString = (decimal: number) => {
  return decimal.toString(16)
}

export const withAlpha = (colorHex: string, alpha: number, upperCase = true) => {
  const colorHexDigit = getColorHexDigit(colorHex)

  if (!colorHexDigit || !validateAlpha(alpha)) {
    return colorHex
  }

  const decimalAlpha = MAX_VALUE * alpha

  const hexAlphaString = decimalToHexString(decimalAlpha)

  const colorHexWithAlpha = `${colorHex}${hexAlphaString}`

  return upperCase ? colorHexWithAlpha.toUpperCase() : colorHexWithAlpha.toLowerCase()
}
