import React from 'react';
// import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Foot/Foot.jsx';
import './HamburgerArticle.css';
import backgroundImage from '../assets/Banners/Appliedai/aiaero.jpg';

function AIHealthcare() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="min-w-full flex flex-col article">
        <div
          className="flex w-full xl:h-[35rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="max-3xl max-w-5xl common_padding">
            <h1 className="text-white xl:text-6xl lg:text-5xl md:text-4xl text-3xl leading-normal md:leading-normal lg:leading-normal font-semibold xl:leading-normal ">
              Advancing Healthcare Through Applied Artificial Intelligence
            </h1>
            <p className="text-white py-4 max-w-2xl text-xl">
              From predictive analytics to robotic surgery, AI is ushering in a
              new era of precision medicine and enhanced patient outcomes.
            </p>
          </div>
        </div>

        <div className="flex justify-center  item-center max-w-5xl mx-auto text-xl font leading-relaxed common_padding">
          <p>
            The field of healthcare is experiencing a profound transformation
            driven by the relentless integration of applied artificial
            intelligence (AI). Recent developments in AI have revolutionised
            diagnostics, treatment, patient care, and overall healthcare
            operations.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AIHealthcare;
