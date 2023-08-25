import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from '../context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminSide from '../components/admin/AdminSide.jsx';

const queryClient = new QueryClient();
export default function AdminLayout() {
  return (
    <div className="flex w-full">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <AdminSide />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
