import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiAuth';

//2.管理getCurrentUser远程状态,调用获得数据
export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });
  return { isLoading, user, isAuth: user?.role === 'authenticated' };
}
