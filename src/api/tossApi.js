import axios from 'axios';

const SECRET_KEY = 'test_sk_GjLJoQ1aVZJBpGe5ZEWVw6KYe2RN:';
const authHeader = `Basic ${btoa(`:${SECRET_KEY}`)}`;


const tossApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization' : 'Basic dGVzdF9za19HakxKb1ExYVZaSkJwR2U1WkVXVnc2S1llMlJOOg=='
    'Authorization': authHeader,
  },
});

export async function getPaymentList(orderId) {
  try {
    const res = await tossApi.get(`https://api.tosspayments.com/v1/payments/orders/${orderId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getTransactions(startDate , endDate) {
  try {
    const res = await tossApi.get('https://api.tosspayments.com/v1/transactions', {
      data : {
        startDate,
        endDate,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

