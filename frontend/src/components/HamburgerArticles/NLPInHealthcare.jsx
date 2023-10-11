import backgroundImage from '../assets/Banners/NLP/Nlpinhealthcare.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function NLPInHealthcare() {
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
              Revolutionising Healthcare with Natural Language Processing
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From electronic health record analysis to chatbots for patient
              engagement, NLP is reshaping healthcare delivery and management.
            </p>
          </div>
        </div>
        <div className="flex p-20 justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The healthcare industry is undergoing a profound transformation
            through the application of Natural Language Processing (NLP)
            technology. Recent developments in NLP are enabling healthcare
            professionals to extract valuable insights from unstructured
            clinical data, improve patient care, and streamline administrative
            processes.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NLPInHealthcare;
