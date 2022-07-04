import React, { useEffect, useState } from 'react';

const VimeoModalBackdrop = ({ isClosing, onClose }) => {

  const handleClose = () => {
    // setIsClosing(true);
    // setTimeout(() => {
    //   setIsClosing(false);
    // }, 500);
    onClose();
  }

  return (
    <>
      <div className={`vimeo-modal-backdrop ${isClosing ? "vimeo-modal-backdrop--closing" : "vimeo-modal-backdrop--opening"}`} onClick={handleClose} />
    </>
  );
};

export default VimeoModalBackdrop;
