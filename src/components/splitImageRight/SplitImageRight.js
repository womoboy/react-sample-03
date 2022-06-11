const SplitImageRight = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <div className="split-image-right">
      <div className="container">
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

export default SplitImageRight;
