import { Link } from "react-router-dom";

export default function AdminSide(){
  
  const sideBar = [];

  const list = ['DASHBOARD' , '상품관리' , '유저관리' , '판매내역'];

  //const listLink = ['/productmanage' , '/productmanage', '/productmanage', '/productmanage']

  for(let i=0; i<list.length; i++){
    if(i === 0){
      sideBar.push(
        <div className="py-6 text-xl font-bold">
          {list[i]}
        </div>
      )
    }
  }

  return(
    <div className="w-1/6 h-[600px] flex flex-col justify-between">
      <div className="flex flex-col">
        {sideBar}
      </div>
      <Link to={'/'} className="py-6 text-xl font-bold">
        HOME
      </Link>
    </div>
  )
}