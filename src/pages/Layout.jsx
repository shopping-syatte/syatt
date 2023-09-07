import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { AuthContextProvider } from '../context/AuthContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function Layout() {
  return (
    <div className="felx overflow-hidden">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}
