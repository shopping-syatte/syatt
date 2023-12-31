import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addNewProduct, getProducts as fetchProducts } from '../api/firebase.js';


export default function useProducts() {
  const queryClient = useQueryClient();

  const productsQuery =
    useQuery(['products'],fetchProducts, {staleTime: 1000 * 60 * 10})

  const addProduct
    = useMutation(({ product, url }) =>
    addNewProduct(product, url), {
    onSuccess: () => queryClient.invalidateQueries(['product']),
  });

  return {productsQuery, addProduct}
}
