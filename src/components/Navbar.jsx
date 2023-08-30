import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import User from './User.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import CartStatus from './CartStatus.jsx';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="h-[100px] flex justify-center items-center w-full relative before:content-[''] before:absolute before:top-0 before:bottom-0 before:w-[9999px] before:border-b before:border-gray-200 before:z-[-1]">
      <div className="w-full flex justify-between items-center p-2">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn m-1 border-gold bg-white text-gold w-[117px] h-[44px] flex justify-center items-center rounded-3xl hover:bg-gold hover:text-white"
          >
            <AiOutlineMenu />
            카테고리
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52 drop-shadow-lg"
          >
            <li className="border-b-2">
              <Link to={'/products/기초포페인팅'}>기초 포페인팅</Link>
            </li>
            <li className="border-b-2">
              <Link to={'/products/메탈페인트'}>메탈 페인트</Link>
            </li>
            <li className="border-b-2">
              <Link to={'/products/메탈플라스터'}>메탈 플라스터</Link>
            </li>
            <li>
              <Link to={'/products/메탈이펙트'}>메탈 이펙트</Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to={'/'} className="flex items-center gap-2">
            <div className="bg-logo bg-cover w-[177px] h-[70px]"></div>
          </Link>
        </div>
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
          {user && !user.isAdmin && (
            <Link to={'/carts'}>
              <CartStatus />
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to={'/admin'}>
              <BiEditAlt className={'text-xl'} />
            </Link>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <User user={user} />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-base-100 rounded-box w-36 drop-shadow-lg"
              >
                <li className="border-b-2">
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
    </header>
  );
}
