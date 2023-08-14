import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { AuthContextProvider } from '../context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function Layout() {
  return (
    <div className='container block mx-auto w-[90%]'>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
