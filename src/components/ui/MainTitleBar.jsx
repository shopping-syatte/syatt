import { useNavigate } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';

export default function MainTitleBar(item) {
  const title = item.title.category;
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex pt-10 pb-2">
        <div className="flex w-[4px] h-[full] bg-[#B28237] mr-2" />
        <div>
          <div className="flex text-[10px]">{title.eng}</div>
          <div className="flex text-[30px]">{title.kor}</div>
        </div>
      </div>
      <div className="flex items-end justify-end w-[100px]">
        <div
          className="flex mr-1 w-[80px] h-[26px] rounded-full justify-center items-center text-[12px] transition text-gold border-[1px] border-gold cursor-pointer hover:bg-gold hover:text-white"
          onClick={() => navigate(`/products/category/${title.kor}`)}
        >
          <HiPlus className="text-[14px] font-bold mr-1" />
          더보기
        </div>
      </div>
    </div>
  );
}
