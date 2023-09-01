import { useEffect, useRef } from 'react';
import { loadPaymentWidget } from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { getTossKeys } from '../api/firebase.js';

//후에 환경변수로 저장할 것
const selector = '#payment-widget';

// eslint-disable-next-line react/prop-types,no-unused-vars
export function CheckoutPage({ price }) {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  // const [price, setPrice] = useState(50_000);

  useEffect(() => {
    (async () => {
      const { clientKey, customerKey } = await getTossKeys().then((result) => {
        console.log(result);
        return result;
      });
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        selector,
        { value: price }
      );
      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;
    if (paymentMethodsWidget == null) {
      return;
    }
    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [price]);

  const handleClick = async () => {
    const paymentWidget = paymentWidgetRef.current;
    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: '토스 티셔츠 외 2건',
        customerName: '김토스',
        customerEmail: 'customer123@gmail.com',
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      console.error('결재 실패', error);
      // handle error
    }
  };

  return (
    <>
      <div>
        <div id="payment-widget" />
        <button className={'btn btn-primary ml-6'} onClick={handleClick}>
          {' '}
          확 인
        </button>
      </div>
    </>
  );
}
