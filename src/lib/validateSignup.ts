export type SignupValues = { fullName: string; email: string; tickets: string }
export type SignupErrors = Partial<Record<keyof SignupValues, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSignup(values: SignupValues, seatsLeft: number): SignupErrors {
  const errors: SignupErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  const tickets = Number(values.tickets)
  if (values.tickets.trim() === '' || !Number.isInteger(tickets) || tickets < 1 || tickets > 4) {
    errors.tickets = 'Choose 1 to 4 tickets'
  } else if (tickets > seatsLeft) {
    errors.tickets = `Only ${seatsLeft} seats left`
  }

  return errors
}