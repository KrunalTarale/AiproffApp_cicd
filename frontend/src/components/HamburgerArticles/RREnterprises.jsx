import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function RREnterprises() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div className="flex w-full xl:h-[35rem] bg-gradient-to-r from-blue-950 to-blue-500  ">
          <div className="max-3xl common_padding max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Empowering Enterprises with Reliable and Robust AI Solutions
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From natural language processing for customer support to machine
              learning for predictive maintenance, AI is reshaping the way
              enterprises operate.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            Enterprises today are increasingly turning to artificial
            intelligence (AI) to drive innovation and gain a competitive edge.
            The recent developments in AI technology have paved the way for more
            reliable and robust solutions that deliver tangible business value.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RREnterprises;
