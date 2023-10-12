import backgroundImage from '../assets/Banners/Appliedai/aiaero.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function AppliedaiAerospace() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Elevating Aerospace with Applied Artificial Intelligence
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From autonomous flight systems to predictive maintenance
              algorithms, AI is playing a pivotal role in enhancing safety,
              efficiency, and sustainability in aviation and aerospace.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The aerospace industry is reaching new heights by embracing the
            transformative potential of applied artificial intelligence (AI).
            Recent advancements in AI technology are reshaping the way aircraft
            are designed, operated, and maintained.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AppliedaiAerospace;
