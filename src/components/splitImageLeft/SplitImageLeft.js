import "../../styles/splitContent.scss";

const SplitImageLeft = ({ title, text, imageUrl, imageAlt }) => {
  return (
    <section className="split-image-left bk-brown">
      <div className="contaier split-content">
        <div>
          <img src={imageUrl} alt={imageAlt} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};

export default SplitImageLeft;
