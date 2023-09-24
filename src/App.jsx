import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLayout from './pages/appLayout/AppLayout';
import Account from './pages/account/Account';
import Cabins from './pages/cabins/Cabins';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import DashBoard from './pages/dashboard/DashBoard';
import ProtectRoute from './features/authentication/ProtectRoute';

// 1
const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter([
    {
      element: (
        <ProtectRoute>
          <AppLayout />
        </ProtectRoute>
      ),
      children: [
        { path: '/', element: <Navigate replace to="/dashboard" /> },
        { path: '/account', element: <Account /> },
        { path: '/dashboard', element: <DashBoard /> },
        { path: '/cabins', element: <Cabins /> },
        { path: '/settings', element: <Settings /> },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    //2
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
