import { describe, it, expect } from 'vitest'
import { validateSignup } from './validateSignup'
import type { SignupValues } from './validateSignup'

const valid: SignupValues = {
  fullName: 'Aliya Nurlanovna',
  email: 'aliya@example.com',
  tickets: '2',
}

describe('validateSignup', () => {
  it('1 accepts valid values', () => {
    expect(validateSignup(valid, 10)).toEqual({})
  })

  it('2 rejects 0 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '0' }, 10)
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it('3 rejects 5 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '5' }, 10)
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it('4 rejects 1.5 tickets', () => {
    const errors = validateSignup({ ...valid, tickets: '1.5' }, 10)
    expect(errors.tickets).toBe('Choose 1 to 4 tickets')
  })

  it('5 accepts exactly 4 tickets', () => {
    expect(validateSignup({ ...valid, tickets: '4' }, 10)).toEqual({})
  })

  it('6 rejects more tickets than seats left', () => {
    const errors = validateSignup({ ...valid, tickets: '3' }, 2)
    expect(errors.tickets).toBe('Only 2 seats left')
  })
})