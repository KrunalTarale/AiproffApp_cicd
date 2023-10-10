import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function CVManufacturing() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div className="flex w-full xl:h-[35rem] bg-gradient-to-r from-blue-950 to-blue-500  ">
          <div className="max-3xl p-20 max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Transforming Manufacturing with Computer Vision Technology
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From defect detection on the factory floor to robotic assembly and
              inventory management, Computer Vision is reshaping the future of
              manufacturing.
            </p>
          </div>
        </div>
        <div className="flex p-20 justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The manufacturing industry is undergoing a significant
            transformation through the integration of Computer Vision
            technology. Recent developments in Computer Vision are
            revolutionising how manufacturers improve quality control, automate
            processes, and optimise production.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CVManufacturing;
