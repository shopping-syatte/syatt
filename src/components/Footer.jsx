import { AiFillYoutube, AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
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
      <footer className="flex justify-around items-center p-2 h-[355px] bg-[#fcfcfc] relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[9999px] before:bg-inherit before:z-[-1]">
        <div>
          <span className="text-[34px] font-bold">
            Painting <br /> Association
          </span>
        </div>
        <div className="border-l-8 border- pl-6">
          <div>
            <div>
              <span>고객센터</span>
              <span>AM 09:00 ~ PM 06:00</span>
            </div>
            <div>
              <span>1566-1000</span>
            </div>
          </div>
          <div>
            <span>(사) 페인팅협회</span>
          </div>
          <div>
            <span>사업자 등록번호 : 150-66-100004 | 대표: 김OO</span> <br />
            <span>
              호스팅 서비스 : 서버회사 | 통신판매업 신고번호 : 신고번호
            </span>
            <br />
            <span>주소 : 주소 기입</span> <br />
            <span>고객센터 : 고객센터 기입</span>
          </div>
          <div>
            {btnTexts.map((text) => {
              return (
                <button key={text} className="text-[#a1a1a1]">
                  {text}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <Link to>
            <AiFillYoutube />
          </Link>
          <Link to>
            <AiFillInstagram />
          </Link>
          <Link to>
            <AiFillFacebook />
          </Link>
        </div>
      </footer>
    </>
  );
}
