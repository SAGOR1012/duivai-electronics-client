import CountDownTime from '../../Components/CountDownTime/CountDownTime';
import Hero from '../../Components/Hero/hero';
import LimitedOffer from '../../Components/LimitedOffer/LimitedOffer';
import MostSelling from '../../Components/MostSelling/MostSelling';
import PopularProducts from '../../Components/PopularProducts/PopularProducts';

const Home = () => {
  return (
    <div>
      {/* Hero section*/}
      <Hero></Hero>
      <PopularProducts></PopularProducts>
      <CountDownTime></CountDownTime>
      <LimitedOffer></LimitedOffer>
      <MostSelling></MostSelling>
    </div>
  );
};

export default Home;
