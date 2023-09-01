import AdminProduct from './AdminProudct';
import useProducts from '../../hooks/useProducts';
import { useSelectedContext } from '../../context/SelectedContext';
import { Pagination } from 'antd';
import { useState, useEffect } from 'react';

export default function AdminProductList() {
  const {
    productsQuery: { data: products },
  } = useProducts();
  const { category, section } = useSelectedContext();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  // const totalProducts = products ? products.length : 0;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  //카테고리와 분류 필터
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

  //페이지네이션 페이지 바뀌는거 적용
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //카테고리나 분류 값 바뀔 때마다 pagination 값을 1로 변경
  //이거 안하면 2페이지에서 분류 바꾸면 제품없는 채로 2페이지에 고립
  useEffect(() => {
    // Reset currentPage to 1 whenever category or section changes
    setCurrentPage(1);
  }, [category, section]);

  return (

    <div className="flex flex-col items-center ">
      <ul>
        {currentProducts.map((product) => (
          <AdminProduct key={product.id} product={product} />
        ))}
      </ul>
      <div className="absolute top-[750px]">
        <Pagination
          current={currentPage}
          total={filteredProducts.length}
          pageSize={productsPerPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
