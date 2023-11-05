import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Services from "./Services";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Carousel></Carousel>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;