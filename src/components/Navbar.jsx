import { BiSolidPencil } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import User from './User.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import CartStatus from './CartStatus.jsx';
import { categorySection } from '../Constant/Constants.js';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="h-[100px] flex justify-center items-center w-full border-b">
      <div className="w-full max-w-[1200px] flex justify-between items-center">
        <div className="flex w-[30%]">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="border text-[16px] border-[#CFA461] bg-white text-[#CFA461] w-[120px] h-[40px] transition flex justify-center cursor-pointer items-center rounded-3xl hover:bg-[#CFA461] hover:text-white"
            >
              <AiOutlineMenu />
              <div className="flex ml-2 mb-[1px]">카테고리</div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52 drop-shadow-lg"
            >
              {categorySection.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={`/products/category/${item}`}>{item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex w-[40%] justify-center">
          <Link to={'/'} className="flex items-center gap-2">
            <div className="bg-logomini bg-cover w-[177px] h-[70px]"></div>
          </Link>
        </div>

        <div className="flex w-[30%] justify-end">
          <div className="flex justify-between items-center gap-4">
            {/* {user && user.isAdmin && (
            <Link to={'/admin'}>
              <p>Admin</p>
            </Link>
          )} */}
            {/* {user && (
            <Link to={'/class'}>
              <p>나의 강의실</p>
            </Link>
          )} */}
            {user && (
              <Link to={'/carts'}>
                <CartStatus />
              </Link>
            )}
            {user && user.isAdmin && (
              <Link to={'/admin'}>
                {/* <BiEditAlt className={'text-xl'} /> */}
                <div className='flex justify-center items-center bg-gold w-[44px] h-[44px] rounded-full hover:bg-goldHover ease-in-out duration-200 transition-all'>
                <BiSolidPencil className={'text-[22px] text-white'} />
                </div>
              </Link>
            )}
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="cursor-pointer">
                  <User user={user} />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu bg-base-100 rounded-box w-36 drop-shadow-lg ho"
                >
                  <li>
                    <Link to={'/class'}>마이페이지</Link>
                  </li>
                  <li>
                    <Link onClick={logout} to={'/'} className="text-red-500">
                      로그아웃
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {!user && (
              <span
                className="cursor-pointer hover:underline text-gold"
                onClick={login}
              >
                로그인 / 회원가입
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
