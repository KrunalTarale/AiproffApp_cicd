import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';
import backgroundImage from '../assets/Banners/FORECASTING/SALESPREDICTION.jpg';

function SalesPrediction() {
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
              Enhancing Sales Strategies through Advanced Sales Prediction
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From predictive analytics models to customer segmentation
              techniques, sales prediction has evolved to deliver more accurate
              and actionable insights.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            In the ever-evolving world of business, sales prediction has become
            a cornerstone of success. Recent advancements in data analytics and
            machine learning have revolutionised the way companies forecast
            sales, enabling them to make data-driven decisions and stay ahead of
            market trends.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SalesPrediction;
