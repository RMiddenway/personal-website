import Link from 'next/link';

const SquareButton = ({ text, link, onClick }) => {
  // const openLink = (link) => window.open(link, "_blank")?.focus();

  // const handleClick = () => {
  //   if (link) {
  //     openLink(link);
  //   } else {
  //     onClick();
  //   }
  // };
  return (
    <>
      <div className="square-button" onClick={() => onClick()}>
        {text}
      </div>
    </>
  );
};

export default SquareButton;
