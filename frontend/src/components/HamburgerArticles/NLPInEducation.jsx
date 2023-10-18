import backgroundImage from '../assets/Banners/NLP/NLPINEDUCATION.webp';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import './HamburgerArticle.css';

function NLPInEducation() {
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
              Transforming Education with Natural Language Processing (NLP)
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From intelligent tutoring systems to automated grading and
              language assessment tools, NLP is reshaping how educators interact
              with students and manage educational content.
            </p>
          </div>
        </div>
        <div className="flex common_padding justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed">
          <p>
            The field of education is embracing a revolutionary change through
            the integration of Natural Language Processing (NLP) technology.
            Recent developments in NLP are opening up exciting possibilities for
            improving teaching, learning, and administrative processes within
            educational institutions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NLPInEducation;
