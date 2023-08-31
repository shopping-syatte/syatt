import { Outlet } from 'react-router-dom';
import SectionNavBar from '../components/SectionNavBar.jsx';

export default function SectionLayout() {
  return (
    <>
      <SectionNavBar />
      <Outlet />
    </>
  );
}
