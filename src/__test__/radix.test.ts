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
    it('20% - 51 - 33', () => {
      expect(decimalToHexString(51)).toBe('33')
    })

    it('40% - 102 - 66', () => {
      expect(decimalToHexString(102)).toBe('66')
    })

    it('60% - 153 - 99', () => {
      expect(decimalToHexString(153)).toBe('99')
    })

    it('80% - 204 - 99', () => {
      expect(decimalToHexString(204)).toBe('cc')
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
