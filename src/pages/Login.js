import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import icon from '../assets/icon.png';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const userData = { ...data, username: 'DemoUser', avatar: icon };
    localStorage.setItem('user', JSON.stringify(userData));
    window.location.href = '/';
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <label>Email address</label>
        <input type="email" placeholder="Email address" {...register('email', { required: 'Email is required' })} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <label>Password</label>
        <input type="password" placeholder="Password" {...register('password', { required: 'Password is required' })} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p className="sign-up-link">Don't have an account? <Link to="/sign-up">Sign Up</Link>.</p>
    </div>
  );
};

export default Login;
