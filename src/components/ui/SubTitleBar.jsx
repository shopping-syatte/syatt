export default function SubTitleBar(item) {
  return (
    <div className="flex w-full h-[130px] shadow-lg bg-[#f6f6f6]">
      <div className="flex flex-col m-auto">
        <div className="flex text-[40px] mr-auto ml-auto">{item.title}</div>
        <div className="flex mt-[6px] mx-auto mb-3 w-[40px] h-[4px] bg-[#CFA461]"></div>
      </div>
    </div>
  );
}
