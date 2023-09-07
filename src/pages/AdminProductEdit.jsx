import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { uploadImage } from '../api/uploader';
import Button from '../components/ui/Button';

export default function AdminProductEdit(){
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const {addProduct} = useProducts();

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

  useState(() => {
    setProduct({
      id,
      image,
      title,
      description,
      price,
      section,
      category,
      detailImage,
      vimeoId,
    });
  }, []);

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
      <h2 className={'text-2xl font-bold my-4'}>제품 수정</h2>
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
        <input
          type='text'
          name={'category'}
          value={product.category?? ''}
          placeholder={'카테코리'}
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name={'description'}
          value={product.description ?? ''}
          placeholder={'제품설명'}
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name={'section'}
          value={product.section ?? ''}
          placeholder={'과목'}
          required={true}
          onChange={handleChange}
        />
        <input
          type='text'
          name={'vimeoId'}
          value={product.vimeoId ?? ''}
          placeholder={'비메오 영상 Id를 입력하세요'}
          required={true}
          onChange={handleChange}
        />
        {/*두번째 업로드 화일 업로드 시키기*/}
        <input
          type='text'
          value={product.detailImage ?? ''}
          placeholder={'상세페이지 url을 입력하세요'}
          name={'detailImage'}
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