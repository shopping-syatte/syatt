import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addNewProduct,
  addOrUpdateToProduct, getProducts, removeFromProduct,
} from '../api/firebase.js';
import { useAuthContext } from '../context/AuthContext.jsx';


export default function useProducts() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();


  const productsQuery =
    useQuery(['products', uid || ''], () => getProducts(uid),
      {
        staleTime: 1000 * 60 * 10,
        enabled:!!uid,
      },
    );

  const addProduct
    = useMutation(({ product, url }) =>
    addNewProduct(product, url), {
    onSuccess: () => queryClient.invalidateQueries(['products']),
  });

  const updateProduct =
    useMutation(({ product }) =>
      addOrUpdateToProduct(uid, product), {
      onSuccess: () =>
        queryClient.invalidateQueries(['products']),
    });

  const removeProduct = useMutation((id) => removeFromProduct(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products'])
      }
    }
  )


  return { productsQuery, addProduct, updateProduct, removeProduct };
}
