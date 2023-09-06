import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
  const btnTexts = [
    '개인정보 처리방침',
    '서비스 이용약관',
    '이용안내',
  ];
  return (
    <>
      <footer>
        <div className='flex justify-around items-center h-[300px] bg-[#FCFCFC] border-t-[1px]'>
          <div className='flex w-[1200px] mx-auto'>
            {/* 로고 */}
            <div className='flex w-[30%]'>
              <span className='text-[34px] font-bold text-fontColor'>
                <Link to={'/'} className='flex items-center gap-2'>
                  <div className='bg-logofooter bg-cover w-[300px] h-[100px] mt-7 ml-5'></div>
                </Link>
              </span>
            </div>
            {/* 기업 내용 */}
            <div className='flex flex-col border-l-[3px] border-fontColor pl-6 text-fontColor w-[50%]'>
              <div className='flex mb-2'>
                <div className='flex flex-col leading-4'>
                  <span className='font-bold text-xl tracking-[5.6px]'>
                    고객센터
                  </span>
                  <span className='text-[9px]'>AM 09:00 ~ PM 06:00</span>
                </div>
                <div>
                  <span className='text-[45px] leading-10 ml-3'>1588-1588</span>
                </div>
              </div>
              <div className='mb-2 font-bold'>
                <span>(주) 샤뜨 </span>
              </div>
              <div className='text-xs mb-2'>
                <span className={'mb-2'}>사업자 등록번호 : 150-66-100004 | 대표: 김OO</span> <br />
                <span className={'mb-2'}>
                  통신판매업 신고번호 : 신고번호
                </span>
                <br />
                <span>주소 : 서울시 은평구 서오릉로 149-26(구산동 2-25번지) 1층 </span> <br />
                <span>Tel : 02-359-7185     Fax : 02-359-7186    E-mail : syattaid@naver.com</span>
              </div>
              <div className='flex gap-x-2 '>
                {btnTexts.map((text) => {
                  return (
                    <button
                      key={text}
                      className='text-fontColor border-[1px] border-fontColor w-24 h-5 mt-2 rounded-[3px] text-[9px]
                      whitespace-nowrap hover:bg-fontColor hover:text-white'
                    >
                      {text}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* 소셜 버튼 */}
            <div className='flex justify-end w-[20%] items-end'>
              <div className='flex gap-x-6'>
                <Link to>
                  <BsYoutube size='35px' fill='#CFA461' />
                </Link>
                <Link to>
                  <BsFacebook size='35px' fill='#CFA461' />
                </Link>
                <Link to>
                  <BsInstagram size='35px' fill='#CFA461' />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-gold h-[55px] flex justify-center items-center text-xs font-bold text-white'>
          <span>© 2023. PelicanStd team All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
