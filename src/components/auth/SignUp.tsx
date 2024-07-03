import React, { useState, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../../db/untils'; // 'untils' o'rniga 'utils'
import "./Auth.scss"
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.svg"

const SignUp = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [userDatatoken, setUserDatatoken] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const user = loadFromLocalStorage('user') || [];
      if(user){
        saveToLocalStorage('user', {username, password, userDatatoken})
      }else{
        alert('User already exists')
      }
    }

    useEffect(() => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
                expiresInMins: 90,
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error('Failed to login');
                }
            })
            .then(data => {
                setUserDatatoken(data.token);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
      <div>
        <div className="auth__nav">
          <Link to={"/"}><img src={Logo} alt="logo"/></Link>
          <a href="/login">Login</a>
        </div>
        
        <div className='auth__wrapper'>
          <div className='auth__form__wrapper'>
            <form className="auth__form" onSubmit={handleSignUp}>
              <h1 className="auth__title">Sign Up</h1>
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
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp;
