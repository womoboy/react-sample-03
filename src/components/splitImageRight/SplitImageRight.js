import '../../styles/splitContent.scss';

const SplitImageRight = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <section className="split-image-right bk-dark">
      <div className="container split-content">
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div>
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default SplitImageRight;
