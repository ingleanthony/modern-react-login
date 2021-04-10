import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import '../css/auth.css';

async function loginUser(credentials) {
  console.log('send credentials to backend, register user and return token');
  return true;
 }

 // Login component
export default function Register({ isAuth, setIsAuth }) {
  // Stores React DOM history
  const history = useHistory();

  // Store form values
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    confirm_pass: "",
  });

  // Updates form values
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser(values);
    setIsAuth(token);
    history.push("/");
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="text-field">
          <input
            required
            type="text"
            name="first_name"
            value={values.first_name}
            onChange={onChange}
          />
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="text-field">
          <input
            required
            type="text"
            name="last_name"
            value={values.last_name}
            onChange={onChange}
          />
          <label htmlFor="last_name">Last Name</label>
        </div>
        <div className="text-field">
          <input
            required
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="text-field">
          <input
            required
            type="password"
            name="password"
            value={values.password}
            onChange={onChange}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="text-field">
          <input
            required
            type="password"
            name="confirm_pass"
            value={values.confirm_pass}
            onChange={onChange}
          />
          <label htmlFor="confirm_pass">Confirm Password</label>
        </div>
        <button type="submit">Create Account</button>
        <span className="linebreak">OR</span>
        <Link className="create-account" to="/signin">
          Go to Sign In
        </Link>
      </form>
    </div>
  );
}