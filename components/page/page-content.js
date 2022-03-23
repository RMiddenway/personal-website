import React from 'react';

const PageContent = ({ children }) => {
  return (
    <>
      <div className="page-content-container">{children}</div>
    </>
  );
};

export default PageContent;
