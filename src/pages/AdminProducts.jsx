import AdminProductHead from '../components/admin/AdminProductHead';
import AdminProductList from '../components/admin/AdminProductList';
import NewProductBtn from '../components/ui/NewProductBtn';

export default function AdminProducts() {
  return (
    <section className="flex items-end">
      <div>
        <AdminProductHead />
        <AdminProductList />
      </div>
      <NewProductBtn/>
    </section>
  );
}
