import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button from '../components/ui/Button.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import { addOrUpdateToCart } from '../api/firebase.js';

export default function ProductDetail() {
  const { uid } = useAuthContext()
  const {
    state: {
      // eslint-disable-next-line no-unused-vars
      product: { id, image, title, description, price, category, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const handleClick = () => {
    const product
      = {id, image, title, price, options: selected, quantity: 1};
    addOrUpdateToCart(uid,product)
  };

  return (
    <>
      <p className={'mx-12 mt-4 text-gray-700'}>{category}</p>
      <section className={'flex flex-col md:flex-row p-4'}>
        <img className={'w-full px-7 basis-7/12'}
          src={image} alt={title} />
        <div className={'w-full basis-5/12 flex flex-col p-4'}>
          <h2 className={'text-3xl font-bold py-2'}>{title}</h2>
          <p className={'text-2xl font-bold py-2 border-b border-gray-400'}>W{price}</p>
          <p className={'py-4 text-lg '}>{description}</p>
          <div className={'flex items-center'}>
            <label className={'text-brand font-bold'} htmlFor={'select'}>옵션</label>
            <select
              className={'p-2 m-4 flex-1 border-2 border-dashed border-brand outline-0'}
              id={'select' }
              onChange={handleSelect} value={selected}>
              {options && options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <Button text={'장바구니에 추가'} onClick={handleClick} />
        </div>
      </section>
    </>
  );
}
