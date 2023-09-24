import { useNavigate } from 'react-router-dom';
import { useUser } from './useUser';
import { useEffect } from 'react';

//3.新建一个protectRoute将layout包起来
const ProtectRoute = ({ children }) => {
  const navigate = useNavigate();

  //1.利用useUser加载拥有权限的用户
  const { isLoading, isAuth } = useUser();

  //2.如果没有权限，重定向至/login
  useEffect(
    function () {
      if (!isAuth && !isLoading) navigate('/login');
    },
    [isAuth, isLoading, navigate]
  );

  //3.有权限，渲染layout(把children给它)
  if (isAuth) return children;
};

export default ProtectRoute;
