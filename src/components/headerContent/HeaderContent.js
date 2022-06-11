const HeaderContent = ({ title, text }) => {
  return (
    <div className="header-content">
      <p>{ text }</p>
      <h2>{ title }</h2>
    </div>
  );
};

export default HeaderContent;
