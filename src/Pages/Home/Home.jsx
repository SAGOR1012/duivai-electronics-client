import Hero from "../../Components/Hero/hero";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            {/* Hero section*/ }
            <Hero></Hero>
            <PopularProducts></PopularProducts>

        </div>
    );
};

export default Home;