import AdminProduct from './AdminProudct';
import useProducts from '../../hooks/useProducts';
import { useSelectedContext } from '../../context/SelectedContext';
import { Pagination } from 'antd';
import { useState } from 'react';

export default function AdminProductList() {
  const {
    productsQuery: { data: products },
  } = useProducts();
  const { category, section } = useSelectedContext();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalProducts = products ? products.length : 0;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const filteredProducts = products
  ? products.filter(
      (product) =>
        (category ? product.category === category : true) &&
        (section ? product.section === section : true)
    )
  : [];
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className=""></div>

      <ul>
        {currentProducts.map((product) => (
          <AdminProduct key={product.id} product={product} />
        ))}
      </ul>
      <div className="absolute top-[750px]">
        <Pagination
          current={currentPage}
          total={totalProducts}
          pageSize={productsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
