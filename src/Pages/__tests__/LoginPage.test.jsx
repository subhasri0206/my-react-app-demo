/* eslint-disable no-undef */
// // src/pages/Login.test.jsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import LoginPage from '../LoginPage';

// test('renders login form and handles submit', () => {
//   render(<LoginPage />);

//   // Check if the login form is rendered
//   const emailInput = screen.getByLabelText(/Email ID:/i);
//   const passwordInput = screen.getByLabelText(/Password:/i);
//   const signInButton = screen.getByRole('button', { name: /sign in/i });

//   // Simulate user typing in the form fields
//   fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
//   fireEvent.change(passwordInput, { target: { value: 'password123' } });

//   // Simulate clicking the submit button
//   fireEvent.click(signInButton);

//   // Check if success message appears
//   expect(screen.getByText(/Successfully logged in/i)).toBeInTheDocument();
// });

// test('shows error message for incorrect credentials', () => {
//   render(<LoginPage />);

//   // Check if the login form is rendered
//   const emailInput = screen.getByLabelText(/Email ID:/i);
//   const passwordInput = screen.getByLabelText(/Password:/i);
//   const signInButton = screen.getByRole('button', { name: /sign in/i });

//   // Simulate user typing incorrect credentials
//   fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
//   fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

//   // Simulate clicking the submit button
//   fireEvent.click(signInButton);

//   // Check if error message appears
//   expect(screen.getByText(/Invalid email or password/i)).toBeInTheDocument();
// });

test('testing', ()=>{
    //step
})