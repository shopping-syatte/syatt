// eslint-disable-next-line react/prop-types
export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className={'flex items-center shrink-0'}>
      <img
        className={'w-[45px] h-[45px] rounded-full mr-2 border-[1px] '}
        src={photoURL}
        alt={displayName}
      />
      {/* <span className={'hidden md:block'}>{displayName}</span> */}
    </div>
  );
}
