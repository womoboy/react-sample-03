import '../../styles/TitleContent.scss';

const TitleContent = ({ title, text1, text2 }) => {
    return (  
        <section className="title-content">
            <div className="container">
                <h3>{ title }</h3>
                <div className="split-content">
                    <p>{ text1 }</p>
                    <p>{ text2 }</p>
                </div>
            </div>
        </section>
    );
}
 
export default TitleContent;