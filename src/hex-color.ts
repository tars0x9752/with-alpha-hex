export type HexColorDigitType = 'RGB' | 'RGBA' | 'RRGGBB' | 'RRGGBBAA'

const RGB_REGEX = /^#([0-9a-fA-F]){3}$/i
const RGBA_REGEX = /^#([0-9a-fA-F]){4}$/i
const RRGGBB_REGEX = /^#([0-9a-fA-F]){6}$/i
const RRGGBBAA_REGEX = /^#([0-9a-fA-F]){8}$/i

const HEX_COLOR_ERROR_MSG =
  'Invalid hexColor. Make sure to use valid hexadecimal notation such as #RGB[A], #RRGGBB[AA].'

export const getHexColorDigitType = (hexColor: string): HexColorDigitType | false => {
  if (RGB_REGEX.test(hexColor)) {
    return 'RGB'
  }

  if (RGBA_REGEX.test(hexColor)) {
    return 'RGBA'
  }

  if (RRGGBB_REGEX.test(hexColor)) {
    return 'RRGGBB'
  }

  if (RRGGBBAA_REGEX.test(hexColor)) {
    return 'RRGGBBAA'
  }

  return false
}

/**
 * #RGB | #RGBA -> #RRGGBB
 */
export const format3NotationHexColor = (hexColor: string): string => {
  const splitter = /(#|([0-9a-fA-F]){1})/gi

  const result = hexColor.match(splitter)

  if (result === null) {
    throw new Error(HEX_COLOR_ERROR_MSG)
  }

  const [, r, g, b] = result // ['#', 'r', 'g', 'b]

  return [r, r, g, g, b, b].join('')
}

/**
 * #RRGGBB | #RRGGBBAA -> #RRGGBB
 */
export const format6NotationHexColor = (hexColor: string): string => {
  const splitter = /(#|([0-9a-fA-F]){2})/gi

  const result = hexColor.match(splitter)

  if (result === null) {
    throw new Error(HEX_COLOR_ERROR_MSG)
  }

  const [, rr, gg, bb] = result // ['#', 'rr', 'gg', 'bb']

  return [rr, gg, bb].join('')
}

export const getRRGGBB = (hexColor: string): string => {
  const HexColorDigitType = getHexColorDigitType(hexColor)

  if (!HexColorDigitType) {
    throw new Error(HEX_COLOR_ERROR_MSG)
  }

  return {
    RGB: format3NotationHexColor(hexColor),
    RGBA: format3NotationHexColor(hexColor),
    RRGGBB: format6NotationHexColor(hexColor),
    RRGGBBAA: format6NotationHexColor(hexColor),
  }[HexColorDigitType]
}
