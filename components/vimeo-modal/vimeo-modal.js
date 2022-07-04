import React, { useState } from 'react';

import VimeoModalBackdrop from './vimeo-modal-backdrop';
import VimeoModalCloseButton from './vimeo-modal-close-button';
import VimeoModalContainer from './vimeo-modal-container';
import VimeoModalHeading from './vimeo-modal-heading';

const VimeoModal = ({ titleText, isShowing, onClose, link }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 500);
    
  };
  return isShowing ? (
    <>
      <VimeoModalBackdrop isClosing={isClosing} onClose={handleClose} />
      <VimeoModalContainer isClosing={isClosing}>
        <VimeoModalHeading>{titleText}</VimeoModalHeading>
        <VimeoModalCloseButton handleClick={handleClose} />
        <iframe
          title={titleText}
          className="vimeo-modal-picture"
          src={link}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VimeoModalContainer>
    </>
  ) : null;
};

export default VimeoModal;
