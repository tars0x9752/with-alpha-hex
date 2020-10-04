import {
  getHexColorDigitType,
  format3NotationHexColor,
  format6NotationHexColor,
  getRRGGBB,
} from '../hex-color'

describe('getHexColorDigitType', () => {
  describe('valid', () => {
    it('RGB', () => {
      expect(getHexColorDigitType('#1F9')).toBe('RGB')
    })

    it('RGBA', () => {
      expect(getHexColorDigitType('#1F9A')).toBe('RGBA')
    })

    it('RRGGBB', () => {
      expect(getHexColorDigitType('#1F9AC0')).toBe('RRGGBB')
    })

    it('RRGGBBAA', () => {
      expect(getHexColorDigitType('#1F9AC012')).toBe('RRGGBBAA')
    })
  })

  describe('invalid', () => {
    it('blank', () => {
      expect(getHexColorDigitType('')).toBe(false)
    })

    it('1F9', () => {
      expect(getHexColorDigitType('1F9')).toBe(false)
    })

    it('#GGG', () => {
      expect(getHexColorDigitType('#GGG')).toBe(false)
    })

    it('#1234567', () => {
      expect(getHexColorDigitType('#1234567')).toBe(false)
    })

    it('#123456789', () => {
      expect(getHexColorDigitType('#123456789')).toBe(false)
    })
  })
})

describe('format3NotationHexColor', () => {
  describe('valid', () => {
    it('RGB', () => {
      expect(format3NotationHexColor('#1F9')).toBe('11FF99')
    })

    it('RGBA', () => {
      expect(format3NotationHexColor('#1F9A')).toBe('11FF99')
    })
  })

  describe('invalid', () => {
    it('blank', () => {
      expect(() => {
        format3NotationHexColor('')
      }).toThrow()
    })
  })
})

describe('format6NotationHexColor', () => {
  describe('valid', () => {
    it('RRGGBB', () => {
      expect(format6NotationHexColor('#11FF99')).toBe('11FF99')
    })

    it('RRGGBBAA', () => {
      expect(format6NotationHexColor('#11FF99FF')).toBe('11FF99')
    })
  })

  describe('invalid', () => {
    it('blank', () => {
      expect(() => {
        format6NotationHexColor('')
      }).toThrow()
    })
  })
})

describe('getRRGGBB', () => {
  describe('valid', () => {
    it('RGB', () => {
      expect(getRRGGBB('#1F9')).toBe('11FF99')
    })

    it('RGBA', () => {
      expect(getRRGGBB('#1F9A')).toBe('11FF99')
    })

    it('RRGGBB', () => {
      expect(getRRGGBB('#11FF99')).toBe('11FF99')
    })

    it('RRGGBBAA', () => {
      expect(getRRGGBB('#11FF99FF')).toBe('11FF99')
    })
  })

  describe('invalid', () => {
    it('blank', () => {
      expect(() => {
        getRRGGBB('')
      }).toThrow()
    })

    it('1F9', () => {
      expect(() => {
        getRRGGBB('1F9')
      }).toThrow()
    })

    it('#GGG', () => {
      expect(() => {
        getRRGGBB('#GGG')
      }).toThrow()
    })

    it('#1234567', () => {
      expect(() => {
        getRRGGBB('#1234567')
      }).toThrow()
    })

    it('#123456789', () => {
      expect(() => {
        getRRGGBB('#123456789')
      }).toThrow()
    })
  })
})
