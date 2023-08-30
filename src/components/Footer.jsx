import { BsYoutube, BsFacebook, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Footer() {
  const btnTexts = [
    '개인정보 처리방침',
    '서비스 이용약관',
    '이용안내',
    '협회 소개',
  ];
  return (
    <>
      <footer>
        <div className="flex flex-wrap justify-around items-center p-2 h-[300px] bg-[#fcfcfc]">
          <div className="w-2/6">
            <span className="text-[34px] font-bold text-fontColor">
              Painting <br /> Association
            </span>
          </div>
          <div className="w-3/6 border-l-4 border-fontColor pl-6 text-fontColor">
            <div className="flex mb-2">
              <div className="flex flex-col leading-6">
                <span className="font-bold text-xl tracking-[5.6px]">
                  고객센터
                </span>
                <span className="text-[9px]">AM 09:00 ~ PM 06:00</span>
              </div>
              <div>
                <span className="text-[45px] leading-6 ml-2">1566-1000</span>
              </div>
            </div>
            <div className="mb-2 font-bold">
              <span>(사) 페인팅협회</span>
            </div>
            <div className="text-xs">
              <span>사업자 등록번호 : 150-66-100004 | 대표: 김OO</span> <br />
              <span>
                호스팅 서비스 : 서버회사 | 통신판매업 신고번호 : 신고번호
              </span>
              <br />
              <span>주소 : 주소 기입</span> <br />
              <span>고객센터 : 고객센터 기입</span>
            </div>
            <div className="flex gap-x-2 ">
              {btnTexts.map((text) => {
                return (
                  <button
                    key={text}
                    className="text-fontColor border-2 rounded-md border-fontColor bord w-24 h-5 mt-2 text-[9px] whitespace-nowrap hover:bg-fontColor hover:text-white"
                  >
                    {text}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="w-1/6 flex flex-col justify-end h-full">
            <div className="flex gap-x-6 mb-14">
              <Link to>
                <BsYoutube size="35px" fill="#CFA461" />
              </Link>
              <Link to>
                <BsFacebook size="35px" fill="#CFA461" />
              </Link>
              <Link to>
                <BsInstagram size="35px" fill="#CFA461" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-gold h-[55px] flex justify-center items-center text-xs font-bold text-white">
          <span>© 2023. Painting Association All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
