
// eslint-disable-next-line react/prop-types
export default function OrderList({ item }) {
  const data = item
  return (
    <div  className={'flex justify-center items-center'}>
      <div>
        <img
          className={'w-[300px]'}
          src={data.image} alt={data.name} />
      </div>
      <div className={'text-2xl ml-[30px]'}>
        <p >{data.title}</p>
        <p>수강날짜:{data.startDate}</p>
      </div>
    </div>
  )
}
