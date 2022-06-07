const Displaytitle = ({ title, text }) => {
  return (
    <section>
      <div className="display-title">
        <p>{ text }</p>
        <h2>{ title }</h2>
      </div>
    </section>
  );
};

export default Displaytitle;
