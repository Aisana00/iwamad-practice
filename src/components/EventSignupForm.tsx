import { useState } from 'react';
import type { ChangeEvent, FocusEvent, SubmitEvent } from 'react';
import Button from './ui/Button';
import TextField from './ui/TextField';
import { validateSignup } from '../lib/validateSignup';
import type { SignupValues } from '../lib/validateSignup';
import type { CampusEvent } from '../data/events';

type EventSignupFormProps = {
  event: CampusEvent;
};

type Touched = Partial<Record<keyof SignupValues, boolean>>;

const initialValues: SignupValues = { fullName: '', email: '', tickets: '1' };

export default function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(initialValues);
  const [touched, setTouched] = useState<Touched>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(event.seats);
  const [booking, setBooking] = useState<{ tickets: number; name: string } | null>(null);

  // errors are calculated on every render, not stored in state
  const errors = validateSignup(values, seatsLeft);

  function showError(field: keyof SignupValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined;
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target;
    setTouched((current) => ({ ...current, [name]: true }));
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (Object.keys(errors).length === 0) {
      const tickets = Number(values.tickets);
      setSeatsLeft((current) => current - tickets);
      setBooking({ tickets, name: values.fullName.trim() });
      setValues(initialValues);
      setTouched({});
      setSubmitAttempted(false);
    }
  }

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      {booking && (
        <p role="status">
          Booked: {booking.tickets} for {booking.name}.
        </p>
      )}
      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          autoComplete="name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={showError('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
    </div>
  );
}