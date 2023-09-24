import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate('/dashboard', { replace: true });
    },
    onError: () => {
      alert('用户名或密码错误！');
    },
  });
  return { login, isLoading };
}
