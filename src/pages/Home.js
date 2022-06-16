import HeaderContent from "../components/headerContent/HeaderContent";
import SplitImageRight from '../components/splitImageRight/SplitImageRight';
import SplitImageLeft from '../components/splitImageLeft/SplitImageLeft';
import image1 from '../library/jungle.jpg';
import image2 from '../library/mountain.jpg';
import TitleContent from "../components/titleContent/TitleContent";
import FeedbackList from "../components/feedbackList/FeedbackList";

const Home = () => {
  const text = "This is a test text";
  const text1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dignissimos hic reprehenderit eaque possimus expedita ex, minus voluptatibus. Laudantium ullam amet quis labore aliquam.';

  return (
    <div className="home">
      <HeaderContent title="Home page top header and this is a test text for this tutorial" text={text} />
      <TitleContent title='The test title for this component' text1={ text1 } text2={ text1 } />
      <SplitImageRight title='The split image right' text={ text1 } imageUrl={ image1 } imageAlt='The beautifull autumn jungle' />
      <SplitImageLeft title='The split image left' text={ text1 } imageUrl={ image2 } imageAlt='The beautifull sunset mountain' />
      <FeedbackList />
    </div>
  );
};

export default Home;
