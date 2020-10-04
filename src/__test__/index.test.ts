import { withAlphaHex, decimalToHexString } from '../index'

describe('withAlphaHex', () => {
  it('RRGGBB', () => {
    expect(withAlphaHex('#FFFFFF', 0.4)).toBe('#FFFFFF66')
  })

  it('alpha 0', () => {
    expect(withAlphaHex('#FFFFFF', 0)).toBe('#FFFFFF00')
  })

  it('alpha 1', () => {
    expect(withAlphaHex('#FFFFFF', 1)).toBe('#FFFFFFFF')
  })

  it('uppercase', () => {
    expect(withAlphaHex('#ffffff', 0.4)).toBe('#FFFFFF66')
  })

  it('lowercase', () => {
    expect(withAlphaHex('#ffffff', 0.4, false)).toBe('#ffffff66')
  })
})
