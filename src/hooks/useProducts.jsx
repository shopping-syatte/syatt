import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, addOrUpdateToProduct , getProducts as fetchProducts, removeFromProducts } from '../api/firebase.js';


export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery =
    useQuery(['products'],fetchProducts, {staleTime: 1000 * 60 * 10})

  const addProduct
    = useMutation(({ product, url }) =>
    addNewProduct(product, url), {
    onSuccess: () => queryClient.invalidateQueries(['product']),
  });

  const updateProduct = useMutation((product) => {
    return addOrUpdateToProduct(product.id, product);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    }
  });

  const removeProduct = useMutation((productId) => {
    // 여기서 productId를 적절하게 설정하십시오.
    return removeFromProducts(productId);
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    }
  });

  return {productsQuery, addProduct, updateProduct, removeProduct}
}
