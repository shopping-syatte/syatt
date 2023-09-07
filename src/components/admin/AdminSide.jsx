import { Link, useLocation } from 'react-router-dom';

export default function AdminSide() {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const list = ['상품등록', '상품관리', '유저관리', '판매내역'];
  const listLink = ['newproduct', 'productmanage', 'user', 'salelist'];

  return (
    <>
      <div className="w-[200px] flex flex-col justify-start items-center mt-3">
        <div className="h-1/8 font-bold text-lg mb-3">관리자 메뉴</div>
        <div className="w-[150px] h-7/8 flex flex-col justify-between border-2 rounded-xl items-center text-center">
          <div className="flex flex-col">
            {listLink.map((link, index) => (
              <>
                <Link
                  key={index}
                  to={`/${link}`}
                  className={`py-6 text-md font-bold border-b-2 last:border-0 ${
                    currentPath === link ? 'text-gold' : ''
                  }`}
                >
                  {list[index]}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
