import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate: logout } = useMutation({
    mutationFn: LogoutApi,
    onSuccess: () => {
      //登出时清除token
      queryClient.removeQueries();
      navigate('/login', { replace: true });
    },
  });
  return { isLoading, logout };
}
