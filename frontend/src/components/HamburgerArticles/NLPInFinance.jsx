import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function NLPInFinance() {
  return (
    <div>
      <Navbar />
      <div className="min-w-full flex flex-col article">
        <div className="flex w-full xl:h-[35rem] bg-gradient-to-r from-blue-950 to-blue-500  ">
          <div className="max-3xl p-20 max-w-5xl ">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Revolutionising Finance with Natural Language Processing (NLP)
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From sentiment analysis in trading to chatbots for customer
              support, NLP is reshaping the landscape of finance.
            </p>
          </div>
        </div>
        <div className="flex p-20 justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The financial industry is at the forefront of a groundbreaking
            transformation, driven by the integration of Natural Language
            Processing (NLP) technology. Recent advancements in NLP are
            revolutionising how financial institutions analyse data, enhance
            customer experiences, and make critical decisions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NLPInFinance;
