import { useAuthContext } from '../context/AuthContext.jsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  addOrUpdateToOrderList,
  getOrderList,
  removeFromOrderList,
} from '../api/firebase.js';

export default function useOrderList() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const orderListQuery =
    useQuery(['orderList', uid || ''], () => getOrderList(uid),
      {
        enabled: !!uid,
        // staleTime: 1000 * 60,
      })


  const addOrUpdateOrderList =
    useMutation((product) => addOrUpdateToOrderList(uid, product), {
      onSuccess: () => {
        queryClient.invalidateQueries(['orderList', uid]);
      },
    });

  const removeOrderList =
    useMutation((id) => removeFromOrderList(uid, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['orderList', uid]);
      },
    },
  );

  return { orderListQuery, addOrUpdateOrderList, removeOrderList };
}
