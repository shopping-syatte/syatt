export default function Button({
  text,
  onClick,
  width = 'auto',
  height = 'auto',
}) {
  const buttonStyle = {
    width: width,
    height: height,
  };

  return (
    <button
      className={'bg-gold py-2 px-4 text-white rounded-xl hover:brightness-110'}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
