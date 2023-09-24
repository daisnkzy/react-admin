import { useState } from 'react';

import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('taosir@163.com');
  const [password, setPassword] = useState('dyt171807');

  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRow label="邮箱">
        <input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow label="密码">
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>
      <FormRow>
        <button className="btn-login" disabled={isLoading}>
          {isLoading ? '登录中...' : '登录'}
        </button>
      </FormRow>
    </form>
  );
}

export default LoginForm;

const FormRow = ({ label, children }) => {
  return (
    <div className="row-vertical">
      <label htmlFor={children.props.id}>{label}</label>
      {children}
    </div>
  );
};
