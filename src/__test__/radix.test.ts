import { decimalToHexString } from '../radix'

describe('decimalToHexString', () => {
  describe('min and max', () => {
    it('min - 0 - 00', () => {
      expect(decimalToHexString(0)).toBe('00')
    })

    it('max - 255 - ff', () => {
      expect(decimalToHexString(255)).toBe('ff')
    })
  })

  describe('round numbers', () => {
    it('10% - 255 * 0.1 - 1a', () => {
      expect(decimalToHexString(255 * 0.1)).toBe('1a')
    })

    it('20% - 255 * 0.2 - 33', () => {
      expect(decimalToHexString(255 * 0.2)).toBe('33')
    })

    it('30% - 255 * 0.3 - 4d', () => {
      expect(decimalToHexString(255 * 0.3)).toBe('4d')
    })

    it('40% - 255 * 0.4 - 66', () => {
      expect(decimalToHexString(255 * 0.4)).toBe('66')
    })

    it('50% - 255 * 0.5 - 66', () => {
      expect(decimalToHexString(255 * 0.5)).toBe('80')
    })

    it('60% - 255 * 0.6 - 99', () => {
      expect(decimalToHexString(255 * 0.6)).toBe('99')
    })

    it('70% - 255 * 0.7 - 99', () => {
      expect(decimalToHexString(255 * 0.7)).toBe('b3')
    })

    it('80% - 255 * 0.8 - 99', () => {
      expect(decimalToHexString(255 * 0.8)).toBe('cc')
    })

    it('90% - 255 * 0.9 - 99', () => {
      expect(decimalToHexString(255 * 0.9)).toBe('e6')
    })
  })

  describe('precise numbers', () => {
    it('12% - 31 - 1f', () => {
      expect(decimalToHexString(31)).toBe('1f')
    })

    it('72% - 184 - 1f', () => {
      expect(decimalToHexString(184)).toBe('b8')
    })
  })
})
