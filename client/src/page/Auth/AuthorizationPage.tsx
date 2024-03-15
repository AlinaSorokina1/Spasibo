/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import './Auth.scss'

function AuthorizationPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Здесь можно выполнить проверку авторизации пользователя, если это необходимо
    // Например, проверка наличия токена в localStorage и перенаправление на главную страницу, если пользователь уже авторизован
  }, []);

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const response = await fetch('/api/auth/authorization', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ login, password }),
    });

    const data = await response.json();
    console.log(data);

    if (data.message === 'success') {
      dispatch({ type: 'auth/login', payload: data.user });
      navigate('/students');

      // alert ('все успешно')
    }
  };

  return (
    <div>
      <form className="authorization-form" onSubmit={onHandleSubmit}>
        <input
          type="text"
          name="login"
          placeholder="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
