
import {FiShoppingBag} from "react-icons/fi";
import {BiEditAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
import User from './User.jsx';
import Button from './ui/Button.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import CartStatus from './CartStatus.jsx';

export default function Navbar() {
    const {user, login, logout} = useAuthContext()

    return (
        <header>
            <div className="flex justify-between items-center w-full border-b border-gray-200 p-2">
                <div>
                    <Link to={'/'} className="flex items-center gap-2 text-[#ff0000]">
                        <FiShoppingBag className={'text-2xl font-bold'}/>
                        <p className={'text-2xl text-bold'}>Syatte Fauxpainting School</p>
                    </Link>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <Link to={'/products'}>
                        <p>Products</p>
                    </Link>
                    {user && <Link to={'/class'}>
                        <p>나의 강의실</p>
                    </Link>}
                    {user && <Link to={'/carts'}>
                       <CartStatus />
                    </Link>}
                    {user && user.isAdmin && (
                      <Link to={'/products/new'}>
                          <BiEditAlt className={'text-xl'}/>
                      </Link>
                    )}
                    {user && <User user={user} />}
                    {!user && <Button onClick={login} text="Login"/>}
                    {user && <Button onClick={logout} text={'Logout'}/>}
                </div>
            </div>
        </header>
    )
}
