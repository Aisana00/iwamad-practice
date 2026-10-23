export type RegistrationValues = {
  fullName: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean
}
export type RegistrationErrors = Partial<Record<keyof RegistrationValues, string>>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateRegistration(values: RegistrationValues): RegistrationErrors {
  const errors: RegistrationErrors = {}

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name'
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email, like name@example.com'
  }

  if (values.password.length < 8) {
    errors.password = 'Use at least 8 characters'
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Include at least one number'
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match'
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = 'Accept the terms to continue'
  }

  return errors
}