import React from 'react';

const VimeoModalContainer = ({ isClosing, children }) => {
  return (
    <>
      {/* <div className="vimeo-modal-underlay" onClick={handleClose} /> */}
      <div className={`vimeo-modal-container ${isClosing ? "vimeo-modal-container--closing" : "vimeo-modal-container--opening"}`}>{children}</div>
    </>
  );
};

export default VimeoModalContainer;
