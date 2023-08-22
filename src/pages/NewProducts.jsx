import { useState } from 'react';
import Button from '../components/ui/Button.jsx';
import { uploadImage } from '../api/uploader.js';
import useProducts from '../hooks/useProducts.jsx';

export default function NewProducts() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const {addProduct} = useProducts();



  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) // 크라우디너리 업로드와 url 획득
      .then(url => {
        addProduct.mutate({product, url},{
          onSuccess: () => {
            setSuccess('성공적으로 제품이 추가되었습니다.');

            setTimeout(() => setSuccess(null), 4000);
          }
        });
      })
      .finally(() => setIsUploading(false));
  };

  // 재활용 가치가 높은 코드
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      console.log(files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };


  return (
    <section className={'w-full text-center'}>
      {success && <p className={'my-2'}>✅{success}</p>}
      <h2 className={'text-2xl font-bold my-4'}>새로운 제품 등록</h2>
      {file && <img className={'w-96 mx-auto mb-2'} src={URL.createObjectURL(file)} alt={file.name} />}
      <form className={'flex flex-col px-12'} onSubmit={handleSubmit}>
        <input
          type='file'
          accept={'image/*'}
          name={'file'}
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name={'title'}
          value={product.title ?? ''}
          placeholder={'상품명을 입력 하세요'}
          required={true}
          onChange={handleChange}
        />
        <input
          type='number'
          name={'price'}
          value={product.price ?? ''}
          placeholder={'제품 가격'}
          required={true}
          onChange={handleChange}
        />
        {/*<input
          type='text'
          name={'category'}
          value={product.category ?? ''}
          placeholder={'카테코리'}
          required={true}
          onChange={handleChange}
        />*/}
        <label
          className={'text-blue font-bold mb-2'}
          htmlFor='category'>카테고리</label>
        <select
          onChange={handleChange}
          className={'border-1 solid border-blue-300 p-2 rounded-md'}
          name={'category'}>
          <option value={'강의'}>강의</option>
          <option value={'상품'}>상품</option>
        </select>
        <input
          type='text'
          name={'description'}
          value={product.description ?? ''}
          placeholder={'제품설명'}
          required={true}
          onChange={handleChange}
        />
        {/*<input
          type='text'
          name={'options'}
          value={product.options ?? ''}
          placeholder={'옵션(콤마(,)로 구분)'}
          required={true}
          onChange={handleChange}
        />*/}
        <input
          type='text'
          name={'vimeoId'}
          value={product.vimeoId ?? ''}
          placeholder={'비메오 영상 Id를 입력하세요'}
          required={true}
          onChange={handleChange}
        />
        <input
          type='file'
          accept={'image/*'}
          name={'detailFile'}
          required={true}
          onChange={handleChange}
        />
        <Button text={isUploading ? '업로드중 ..' : '제품등록하기'}
                disabled={isUploading}
        />
      </form>
    </section>
  );
}
