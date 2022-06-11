import HeaderContent from '../components/headerContent/HeaderContent';

const Home = () => {
    const text = 'This is a test text';

    return (
        <div className="home">
            <HeaderContent title='Home page top header' text={ text } />
        </div>
    )
}

export default Home;