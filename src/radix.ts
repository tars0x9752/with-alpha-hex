export const decimalToHexString = (decimal: number): string => {
  const hex = Math.round(decimal).toString(16)

  if (hex === '0') {
    return '00'
  }

  return hex
}
