import Link from 'next/link';
import React from 'react';

import ASCIIChar from './ascii-char';

const HomePanel = ({ ascii, link, classNames, children }) => {
  return (
    <>
      <div className={`home-panel ${classNames}`}>
        <Link href={link ? link : "/"} passHref>
          <div className="ascii-container">
            {ascii.split("").map((c, i) => (
              <ASCIIChar key={i} char={c} />
            ))}
          </div>
        </Link>
        {children}
      </div>
    </>
  );
};

export default HomePanel;
