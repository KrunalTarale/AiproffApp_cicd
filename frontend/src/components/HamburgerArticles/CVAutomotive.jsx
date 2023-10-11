import backgroundImage from '../assets/Banners/CV/CVINAUTOMATIVE.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function CVAutomotive() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="max-3xl p-20 max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Advancing Automotive Technology with Computer Vision
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From advanced driver-assistance systems (ADAS) to self-driving
              cars, Computer Vision is reshaping the future of mobility.
            </p>
          </div>
        </div>
        <div className="flex p-20 justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The automotive industry is on the brink of a technological
            revolution, thanks to the integration of Computer Vision technology.
            Recent developments in Computer Vision are redefining how vehicles
            perceive their environment, enhancing safety, autonomy, and user
            experiences.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CVAutomotive;
