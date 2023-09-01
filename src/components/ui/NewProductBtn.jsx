import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NewProductBtn(){
  return(
    <div className="w-12 h-12 border-2 border-black rounded-full flex justify-center items-center">
      <Link to={'/newproduct'}>
        <BiEditAlt className="text-3xl" />
      </Link>
    </div>
  )
}