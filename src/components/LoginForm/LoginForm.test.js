import { render, screen } from '@testing-library/react';
import LoginForm from '.';

test('renders sign in page', () => {
  render(<LoginForm />);
  const signInText = screen.getByText("Sign in");
  expect(signInText).toBeInTheDocument();
});

// Add more unit test here
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyForm from './MyForm';

describe('Form validation tests', () => {
  test('Invalid email validation', () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    const emailInput = getByLabelText('Email');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    expect(getByText('Invalid email address')).toBeInTheDocument();
  });

  test('Invalid password validation', () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(passwordInput, { target: { value: 'pass' } });
    fireEvent.click(submitButton);

    expect(
      getByText(
        'Password should be at least 8 characters long and contain uppercase, lowercase, a number, and a special character'
      )
    ).toBeInTheDocument();
  });

  test('Valid form submission', () => {
    const { getByLabelText, getByText } = render(<MyForm />);
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Submit');

    fireEvent.change(emailInput, { target: { value: 'valid-email@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'ValidPassword!1' } });
    fireEvent.click(submitButton);

    expect(getByText('Validation Passed! Success Message Here.')).toBeInTheDocument();
  });
});
