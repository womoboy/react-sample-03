import HeaderContent from "../components/headerContent/HeaderContent";
import SplitImageRight from "../components/splitImageRight/SplitImageRight";
import TitleContent from "../components/titleContent/TitleContent";
import Image1 from '../library/aboutus.jpg';

const AboutUs = () => {
    const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, aspernatur ex? Provident eos aspernatur, cum voluptatibus accusamus a itaque maxime sequi id corrupti facere, doloribus neque quae dolores culpa obcaecati.';

    return (  
        <div className="about-us">
            <SplitImageRight title="About us" text={ text } imageUrl={ Image1 } imageAlt='about us image' />
            <TitleContent title="Best of the best" text1={ text } text2={ text } />
            <HeaderContent text='The best experiacnce for you' title='Our Company create the best' />
        </div>
    );
}
 
export default AboutUs;