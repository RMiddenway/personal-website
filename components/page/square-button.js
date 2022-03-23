import React from 'react';

const SquareButton = ({ text, onClick }) => {
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
