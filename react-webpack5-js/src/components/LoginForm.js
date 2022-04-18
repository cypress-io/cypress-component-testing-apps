import React, { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const LoginForm = ({ onLogin, title = 'Log In', errorMessage }) => {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin({ username, password });
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-screen-sm p-12 mx-auto bg-gray-50 rounded-md shadow-lg">
      <form className="flex flex-col" onSubmit={handleFormSubmit}>
        <fieldset>
          <legend className="text-3xl text-gray-800 mb-4">{title}</legend>
          <InputField
            name="username"
            type="text"
            label="Username"
            submitted={submitted}
            requiredMessage="Username is required"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            autoComplete="username"
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            submitted={submitted}
            requiredMessage="Password is required"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
          />
          <Button type="submit">Login</Button>
          {errorMessage && (
            <div className="text-red-500 mt-2">{errorMessage}</div>
          )}
        </fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
