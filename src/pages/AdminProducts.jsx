import AdminProductHead from '../components/admin/AdminProductHead';
import AdminProductList from '../components/admin/AdminProductList';

export default function AdminProducts() {
  return (
    <section className="w-full flex items-start justify-start">
      <div className="h-screen">
        <AdminProductHead />
        <AdminProductList />
      </div>
    </section>
  );
}
