import { getPaymentList } from '../api/tossApi.js';

export default async function CheckPayments(orderId) {
  const payment = await getPaymentList(orderId)
  console.log(payment);

}
