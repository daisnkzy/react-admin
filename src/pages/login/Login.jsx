import React from 'react';
import LoginForm from '../../features/authentication/LoginForm';

import './login.scss';
const Login = () => {
  return (
    <div className="login">
      <h2 className="login-text">登陆您的账户</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
