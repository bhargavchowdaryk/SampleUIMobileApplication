import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    console.log('Register form submitted!');
    console.log('Username:', username);
    console.log('Hashed Password:', hashedPassword);
    // Add your registration logic here
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="register-username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter a username"
            required
          />
        </Form.Group>
        <Form.Group controlId="register-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter a password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
