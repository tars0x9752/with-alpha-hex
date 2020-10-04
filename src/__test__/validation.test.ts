import { validateAlpha } from '../validation'

describe('validateAlpha', () => {
  describe('valid', () => {
    it('min', () => {
      expect(validateAlpha(0)).toBe(true)
    })

    it('0.5', () => {
      expect(validateAlpha(0.5)).toBe(true)
    })

    it('max', () => {
      expect(validateAlpha(1)).toBe(true)
    })
  })

  describe('invalid', () => {
    it('negative', () => {
      expect(validateAlpha(-1)).toBe(false)
    })

    it('> 1', () => {
      expect(validateAlpha(1.1)).toBe(false)
    })

    it('big', () => {
      expect(validateAlpha(100)).toBe(false)
    })
  })
})
