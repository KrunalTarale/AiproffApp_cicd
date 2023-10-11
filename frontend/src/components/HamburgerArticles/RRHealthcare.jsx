import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function RRHealthcare() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div className="flex w-full xl:h-[35rem] bg-gradient-to-r from-blue-950 to-blue-500  ">
          <div className="max-3xl p-20 max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Empowering Healthcare with Reliable and Robust AI Solutions
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From medical image analysis to predictive analytics for disease
              management, AI is reshaping the landscape of healthcare.
            </p>
          </div>
        </div>
        <div className="flex p-20 justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            In the healthcare industry, the demand for reliable and robust
            artificial intelligence (AI) solutions has never been greater.
            Recent advancements in AI technology have paved the way for
            transformative applications that improve patient care, optimise
            operations, and drive medical research.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RRHealthcare;
