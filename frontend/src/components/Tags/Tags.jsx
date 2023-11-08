import React,{useEffect} from "react";
import SearchContent from "../Search/Searchcontent.json";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Tags.css";
import ReactGA from "react-ga";
import { Helmet } from 'react-helmet';

// import card_image2 from "../assets/Nlp_img/nlp_bannerr.webp";

const Tags = () => {

  const navigate = useNavigate();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
    if(filteredArticles.length === 0){
      navigate('/notfound')
    }
  }, []);

  const params = useParams();
  const tagname = params.tagname;

  const filteredArticles = SearchContent.filter(
    (article) => article.tag === tagname
  );

  const words = tagname.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1));
const formattedTagname = words.join(' ');

  function allcards(card){

    const words = card.description.split(' ');
    const limitedDescription = words.slice(0, 10).join(' ');

    return(
        <Link
        to={card.url}
        className="mx-1 text-blue-600 no-underline cursor-pointer"
      >
        <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
        <div
          src={card.img}
          className="card_img"
          alt="Quantum Article" 
          style={{ backgroundImage: `url("${card.img}")` }}
        ></div>
        <div className="p-4">
        <p>{card.date}</p>
          <p className="text-gray-700 font-bold hover:underline underline-offset-4">
            {card.heading}
          </p>
          <p>{limitedDescription}</p>
        </div>
      </div>
      </Link>
    )

  }

  return (
    <>

        <Helmet>
            {/* <link href="https://www.aiproff.ai/tags/" rel="canonical" /> */}
        </Helmet>

      <Navbar />

      <h1 className="lg:text-5xl text-4xl font-bold text-center mt-8 mb-7">{formattedTagname}</h1>

      <div className="bg-slate-100 w-full article">
        <div className="mx-auto flex  justify-center">
        </div>
        <div className="all_card_container">

          {
         filteredArticles.length === 0  ? (<h1 className="text-4xl font-semibold text-center mt-10">Post Coming Soon</h1>) : filteredArticles.map(allcards)
          }
 
        </div>
      </div>


    </>
  );
};

export default Tags;
