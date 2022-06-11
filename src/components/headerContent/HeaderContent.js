const HeaderContent = ({ title, text }) => {
  return (
    <div className="header-content">
      <div className="container">
        <p>{text}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default HeaderContent;
