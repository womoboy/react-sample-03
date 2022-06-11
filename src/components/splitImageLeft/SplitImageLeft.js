import '../../styles/splitContent.scss';

const SplitImageLeft = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <section className="split-image-left">
      <div className="contaier split-content">
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

export default SplitImageLeft;
