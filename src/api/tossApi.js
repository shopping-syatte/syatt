import axios from 'axios';

const SECRET_KEY = 'test_sk_GjLJoQ1aVZJBpGe5ZEWVw6KYe2RN:';
const authHeader = `Basic ${btoa(`:${SECRET_KEY}`)}`;
console.log(authHeader);

const tossApi = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': authHeader,
  },
});

export async function getPaymentList(orderId) {
  try {
    const res = await tossApi.get(`v1/payments/orders/${orderId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

