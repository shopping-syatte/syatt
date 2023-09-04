import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import useCart from '../hooks/useCart.jsx';

export default function ProductDetail() {
  const {
    state: {
      product: {
        id,
        image,
        title,
        description,
        price,
        section,
        category,
        detailImage,
        vimeoId,
      },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const { cartQuery, addOrUpdateItem } = useCart();

  const isProductInCart = () => {
    console.log(cartQuery);
    return cartQuery.data.some((item) => item.id === id);
  };

  const handleClick = () => {
    if (isProductInCart()) {
      setSuccess('이미 장바구니에 추가된 제품입니다.');
    } else {
      const product = {
        id,
        image,
        title,
        description,
        price,
        vimeoId,
        category,
        section,
        quantity: 1,
      };

      addOrUpdateItem.mutate(product, {
        onSuccess: () => {
          setSuccess('장바구니에 추가 되었습니다.');
          console.log(product);
          setTimeout(() => {
            setSuccess(null);
          }, 3000);
        },
      });
    }
  };

  return (
    <React.Fragment>
      <section
        className={
          'border-gray-100 w-full h-[170px] bg-gray-50 shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]'
        }
      >
        <h1
          className={
            'p-[46px_0_70px_0] font-bold text-center text-[40px] text-black after:block after:mt-[10px] after:mx-auto after:w-[40px] after:h-[4px] after:bg-gold'
          }
        >
          {section} 클래스
        </h1>
      </section>

      {/* <p className={'mx-12 mt-4 text-gray-700'}>{category}</p> */}
      <main className={'flex flex-col items-center'}>
        <section className={'flex flex-col md:flex-row m-[67px_0_40px_0]'}>
          <img className={'w-24 md:w-48 rounded-lg'} src={image} alt={title} />
          <aside
            className={
              'flex flex-col p-[23px_23px_0] ml-[300px] border border-gray-300 rounded-lg divide-y-[1px] divide-gray-300 w-[390px] h-[375px] bg-gray-50'
            }
          >
            <h2 className={'mb-[16px] text-3xl font-bold'}>{title}</h2>
            <p className={'p-[11px_0_16px] text-lg text-gray-400'}>
              {description}
            </p>
            <p className={'pb-2 text-right font-bold text-[40px]'}>
              {price
                .toLocaleString('ko-KR', {
                  style: 'currency',
                  currency: 'KRW',
                })
                .replace('₩', '')}
              원
            </p>
            <div className={'py-4'}>
              <Button
                text={'장바구니에 추가'}
                onClick={handleClick}
                width={'340px'}
                height={'44px'}
              />
            </div>
            {success && (
              <p className={'pt-2 text-center text-base'}>{success}</p>
            )}
          </aside>
        </section>
        <figure>
          <img className={'mb-[155px]'} src={detailImage} alt={title} />
        </figure>
      </main>
    </React.Fragment>
  );
}
