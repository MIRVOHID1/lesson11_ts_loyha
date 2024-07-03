import "./Home.scss"
import CoruselSection from "./corusel-section/CoruselSection";
import CoruselSection2 from "./corusel-section2/CoruselSection2";
import Section3 from "./section-3/Section3";
import Slider from "./slider/Slider";

const Home = () => {
    return (
        <>
          <Slider/>
          <CoruselSection/>
          <Section3/>
          <CoruselSection2/>
        </>
    );
}

export default Home;