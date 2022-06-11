const SplitImageLeft = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <div className="split-image-left">
      <div className="contaier">
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div>
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default SplitImageLeft;
