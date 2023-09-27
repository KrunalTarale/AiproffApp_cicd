// import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Foot/Foot";
import "./Assisment.css";
import { Link } from 'react-router-dom';

const Assisment = () => {
  return (
    <>
      <Navbar />

      <div className="allCards">


        {/* <div className="cards">
          <div className="img"></div>
          <span>About Me</span>
          <p className="info">
            I’m Walter, a multidisciplinary designer who focuses on telling my
            clients’ stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <Link to={"/assessmentStarted/0"}><button>Start Assessment</button></Link>
        </div>
        <div className="cards">
          <div className="img"></div>
          <span>About Me</span>
          <p className="info">
            I’m Walter, a multidisciplinary designer who focuses on telling my
            clients’ stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <Link to={"/assessmentStarted/1"}><button>Start Assessment</button></Link>
        </div>
        <div className="cards">
          <div className="img"></div>
          <span>About Me</span>
          <p className="info">
            I’m Walter, a multidisciplinary designer who focuses on telling my
            clients’ stories visually, through enjoyable and meaningful
            experiences. I specialize in responsive websites and functional user
            interfaces.
          </p>
          <Link to={"/assessmentStarted/2"}><button>Start Assessment</button></Link>
        </div> */}


<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  {/* <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  </div> */}
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl  bg-clip-border text-white shadow-lg card_img"></div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    DATA ANALYTICS ASSESSMENT
    </h5>
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Usually, folks would complete it in 30-40 minutes
    </p>
  </div>
  <div className="p-6 pt-0">
  <Link to={"/assessmentStarted/0"}>
    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Start Assessment
    </button>
    </Link>
  </div>
</div>


      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Assisment;
