import '../../styles/HeaderContent.scss';

const HeaderContent = ({ title, text }) => {
  return (
    <section className="header-content">
      <div className="content">
        <p>{text}</p>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default HeaderContent;
