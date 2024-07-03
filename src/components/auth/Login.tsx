import React, { useState, useEffect } from 'react';
import { loadFromLocalStorage } from '../../db/untils';
import { Link } from 'react-router-dom'; 
import './Auth.scss';
import Logo from '../../assets/logo.svg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = loadFromLocalStorage('user');
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.username === username && user.password === password) {
      window.location.href = "/";
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <div>
      <div className="auth__nav">
        <Link to={"/"}><img src={Logo} alt="logo"/></Link>
        <a href="/sign-up">Sign Up</a>
      </div>
    <div className="auth__wrapper">
      <div className="auth__form__wrapper">
        <h1 className="auth__title">Login</h1>
        <form className="auth__form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
};


export default Login;