// import { useAuthContext } from '../context/AuthContext.jsx';
import AdminSide from "../components/admin/AdminSide"

export default function Admin () {

  // const { user } = useAuthContext();

  // if(user && !user.Admin){
  //   alert('관리자만 접속 가능합니다.');
  //   location.replace('/')
  // }else if(!user){
  //   alert('관리자 로그인 후 접속 가능합니다.')
  //   location.replace('/')
  // }

  return(
    <section>
      <AdminSide/>
    </section>
  )
}