import { withAlphaHex } from '../index'

describe('withAlphaHex', () => {
  describe('valid inputs', () => {
    it('RGB', () => {
      expect(withAlphaHex('#123', 0.4)).toBe('#11223366')
    })

    it('RGBA', () => {
      expect(withAlphaHex('#1234', 0.4)).toBe('#11223366')
    })

    it('RRGGBB', () => {
      expect(withAlphaHex('#1234FF', 0.4)).toBe('#1234FF66')
    })

    it('RRGGBBAA', () => {
      expect(withAlphaHex('#ABCDEFAA', 0.4)).toBe('#ABCDEF66')
    })

    it('alpha 0', () => {
      expect(withAlphaHex('#FFFFFF', 0)).toBe('#FFFFFF00')
    })

    it('alpha 1', () => {
      expect(withAlphaHex('#FFFFFF', 1)).toBe('#FFFFFFFF')
    })

    it('lowercase to uppercase', () => {
      expect(withAlphaHex('#ffffff', 0.4)).toBe('#FFFFFF66')
    })

    it('lowercase to lowercase', () => {
      expect(withAlphaHex('#ffffff', 0.4, false)).toBe('#ffffff66')
    })

    it('0.1', () => {
      expect(withAlphaHex('#ffffff', 0.1, false)).toBe('#ffffff1a')
    })
    it('0.2', () => {
      expect(withAlphaHex('#ffffff', 0.2, false)).toBe('#ffffff33')
    })
    it('0.3', () => {
      expect(withAlphaHex('#ffffff', 0.3, false)).toBe('#ffffff4d')
    })
    it('0.4', () => {
      expect(withAlphaHex('#ffffff', 0.4, false)).toBe('#ffffff66')
    })
    it('0.5', () => {
      expect(withAlphaHex('#ffffff', 0.5, false)).toBe('#ffffff80')
    })
    it('0.6', () => {
      expect(withAlphaHex('#ffffff', 0.6, false)).toBe('#ffffff99')
    })
  })

  describe('invalid hexColor', () => {
    it('#ggg', () => {
      expect(() => {
        withAlphaHex('#ggg', 0.4)
      }).toThrow()
    })

    it('#12', () => {
      expect(() => {
        withAlphaHex('#12', 0.4)
      }).toThrow()
    })

    it('#12345', () => {
      expect(() => {
        withAlphaHex('#12345', 0.4)
      }).toThrow()
    })

    it('#1234567', () => {
      expect(() => {
        withAlphaHex('#1234567', 0.4)
      }).toThrow()
    })

    it('#123456789', () => {
      expect(() => {
        withAlphaHex('#123456789', 0.4)
      }).toThrow()
    })

    it('blank hex color', () => {
      expect(() => {
        withAlphaHex('', 0.4)
      }).toThrow()
    })
  })

  describe('invalid alpha', () => {
    it('> 1', () => {
      expect(() => {
        withAlphaHex('#123', 1.1)
      }).toThrow()
    })

    it('< 0', () => {
      expect(() => {
        withAlphaHex('#123', -1)
      }).toThrow()
    })
  })
})
