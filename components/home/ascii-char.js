import React from 'react';

const ASCIIChar = ({ char }) => {
  return (
    <span className={`ascii ascii__${Math.floor(Math.random() * 10)}`}>
      {char}
    </span>
  );
};

export default ASCIIChar;
