import { useAuthContext } from '../context/AuthContext.jsx';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addOrUpdateToPayment, getPayment, removeFromPayment } from '../api/firebase.js';

export default function UsePayment() {
  const { uid } = useAuthContext();
  const queryClient = useQueryClient();
  const paymentQuery =
    useQuery(['payment', uid || ''], () => getPayment(uid),
      {
        enabled: !!uid,
      })

  const addOrUpdatePayment =
    useMutation((product) => addOrUpdateToPayment(uid, product), {
      onSuccess: () => {
        queryClient.invalidateQueries(['payment', uid]);
      },
    });

  const removePayment = useMutation((id) => removeFromPayment(uid, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['payment', uid]);
      },
    },
  );

  return { paymentQuery, addOrUpdatePayment, removePayment };

}
