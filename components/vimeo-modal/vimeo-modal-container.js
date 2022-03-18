const VimeoModalContainer = ({ children }) => {
  return (
    <>
      {/* <div className="vimeo-modal-underlay" onClick={handleClose} /> */}
      <div className="vimeo-modal-container">{children}</div>
    </>
  );
};

export default VimeoModalContainer;
