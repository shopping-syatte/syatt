import { useSelectedContext } from '../../context/SelectedContext';
import { IoMdArrowDropdown } from 'react-icons/io';
import { categorySection } from '../../Constant/Constants';
import { Link } from 'react-router-dom';

export default function AdminProductHead() {
  const { setCategory, setSection } = useSelectedContext();

  const headList = [
    '제품이미지',
    '상품명',
    '카테고리',
    '가격',
    '분류',
    '수정',
    '삭제',
  ];

  const categoryList = ['온라인강의', '여성 상의'];

  const classifyCategory = (e, item) => {
    e.preventDefault();
    setCategory(item)
  }

  const classifySection = (e, item) => {
    e.preventDefault();
    setSection(item)
  }

  return (
    <div className="flex text-center py-2">
      {headList.map((headItem) => (
        <div className="w-32" key={headItem}>
          {headItem === '카테고리' ? (
            <div className='dropdown'>
              <label tabIndex={0} className="flex items-center cursor-pointer">
                {headItem}<IoMdArrowDropdown/>
              </label>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                {categoryList.map((item, index)=>{
                  return(
                    <li key={index} onClick={(e) => classifyCategory(e, item)}>
                      <Link>{item}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : headItem === '분류' ? (
            <div className='dropdown'>
              <label tabIndex={0} className="flex items-center cursor-pointer">
                {headItem}<IoMdArrowDropdown/>
              </label>
              <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
                {categorySection.map((item, index)=>{
                  return(
                    <li key={index} onClick={(e) => classifySection(e, item)}>
                      <Link>{item}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : (
            <div key={headItem}>{headItem}</div>
          )}
        </div>
      ))}
    </div>
  );
}
