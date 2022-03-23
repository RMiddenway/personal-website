import React from 'react';

const VimeoModalBackdrop = ({ onClose }) => {
  return (
    <>
      <div className={`vimeo-modal-backdrop `} onClick={onClose} />
    </>
  );
};

export default VimeoModalBackdrop;
