export const decimalToHexString = (decimal: number) => {
  const hex = decimal.toString(16)

  if (hex === '0') {
    return '00'
  }

  return hex
}
