const VimeoModalCloseButton = ({ handleClick }) => {
  return (
    <>
      <div className="vimeo-modal-close-button" onClick={handleClick}>
        X
      </div>
    </>
  );
};

export default VimeoModalCloseButton;
