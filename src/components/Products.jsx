import ProductCard from './ProductCard.jsx';
import MainTitleBar from './ui/MainTitleBar.jsx';
import useProducts from '../hooks/useProducts.jsx';
import { categorySections } from '../Constant/Constants.js';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();
  console.log(products);

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {categorySections.map((category, index) => (
        <div key={index}>
          <MainTitleBar title={{ category }} />
          <ul className={'grid grid-cols-3 gap-x-4 mt-8'}>
            {products &&
              products
                .filter((product) => product.section === category.kor)
                .sort((a, b) => {
                  const aNumber = parseInt(a.title.split('.')[0]);
                  const bNumber = parseInt(b.title.split('.')[0]);
                  return aNumber - bNumber;
                })
                .slice(0, 3) // 배열 데이터 3개만 노출 'more' 버튼 추가 예정
                .map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
