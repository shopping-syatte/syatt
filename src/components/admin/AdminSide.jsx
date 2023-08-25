import { Link } from 'react-router-dom';

export default function AdminSide() {
  const sideBar = [];

  const list = ['DASHBOARD', '상품관리', '유저관리', '판매내역'];

  const listLink = ['/admin', '/productmanage', '/user', '/salelist'];

  for (let i = 0; i < list.length; i++) {
    {
      sideBar.push(
        <Link to={listLink[i]} className="py-6 text-xl font-bold" key={list[i]}>
          {list[i]}
        </Link>
      );
    }
  }

  return (
    <div className="w-1/6 h-[600px] flex flex-col justify-between border-2">
      <div className="flex flex-col">{sideBar}</div>
      <Link to={'/'} className="py-6 text-xl font-bold">
        HOME
      </Link>
    </div>
  );
}
