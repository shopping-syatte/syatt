import ClassViewer from './ClassViewer.jsx';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function ClassList({ item }) {
  // modal상태 관리
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleClick() {
    setIsOpenModal(true);
  }
  const data = item;

  return (
    <>
      <div className={'flex justify-content mb-[40px]'}>
        <div>
          <img
            onClick={handleClick}
            className={'w-[285px] h-[162px] rounded-[14.7px]'}
            src={data.image} alt={data.title} />
          <p className={'font-bold text-[20px] text-fontColor text-left'}>
            #{data.title}
          </p>
          <p className={'text-[12px] text-fontColor'}>수강기간:{data.startDate} ~ {data.videoEnd}</p>
          {isOpenModal && (
            <ClassViewer data={data} setIsOpenModal={setIsOpenModal} />
          )}
        </div>
      </div>
    </>
  );
}
