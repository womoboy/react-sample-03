import Displaytitle from "./components/displaytitle/Displaytitle";
import SplitImageRight from './components/splitImageRight/SplitImageRight';
import SplitImageLeft from './components/splitImageLeft/SplitImageLeft';

const App = () => {
    //data for displaytitle
    const title1 = 'Respansive layouts don\'t have to be a struggle';
    const text1 = 'This is the test header';

    //data for split image right
    const img1 = './library/autumnJongle.jpg';
    const alt1 = 'The beautyfull Autumn jungle';

    //data for split image left
    const img2 = './library/mountain.jpg';
    const alt2 = 'Sunset and mountain';

    return(
        <div className="app">
            <div className="main">
                <Displaytitle title={ title1 } text={ text1 } />
                <SplitImageRight  />
                <SplitImgaeLeft />
            </div>
        </div>
    )
}

export default App;