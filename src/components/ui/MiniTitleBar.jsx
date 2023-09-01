export default function MiniTitleBar(item) {
    return (
        <div className='flex pt-10 pb-2 border-b-[1px]'>
          <div className="flex text-[30px]">{item.title}</div>
        </div>
    );
  }
  