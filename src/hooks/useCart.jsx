import { useAuthContext } from '../context/AuthContext.jsx'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addOrUpdateToCart,
  addOrUpdateToPayment,
  getCart,
  removeFromCart,
  removeFromPayment,
} from './../api/firebase.js';


export default function useCart() {
  const {uid} = useAuthContext()
  const queryClient = useQueryClient()
  const cartQuery =
    useQuery(['cart', uid || ''], () => getCart(uid),
      {
        enabled: !!uid,
      })

  const addOrUpdateItem =
    useMutation((product) => addOrUpdateToCart(uid, product), {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', uid])
      }
    })
  const removeItem = useMutation((id) => removeFromCart(uid, id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', uid])
      }
    }
  )


  const addOrUpdatePayment =
    useMutation((product) => addOrUpdateToPayment(uid, product), {
      onSuccess: () => {
        queryClient.invalidateQueries(['cart', uid])
      }
    })
  const removePayment = useMutation((id) => removeFromPayment(uid, id),
    {
      onSuccess: () => {
        // queryClient.invalidateQueries(['cart', uid])
      }
    }
  )
  return {cartQuery, addOrUpdateItem, removeItem, addOrUpdatePayment, removePayment}

}
