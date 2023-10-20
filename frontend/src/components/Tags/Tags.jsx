import React from "react";
import SearchContent from "../Search/Searchcontent.json";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Tags.css";

// import card_image2 from "../assets/Nlp_img/nlp_bannerr.webp";

const Tags = () => {
  const params = useParams();
  const tagname = params.tagname;

  const filteredArticles = SearchContent.filter(
    (article) => article.tag === tagname
  );
  console.log(filteredArticles);

  function allcards(card){

    const words = card.description.split(' ');
    const limitedDescription = words.slice(0, 10).join(' ');

    return(
        <Link
        to={card.url}
        className="mx-1 text-blue-600 no-underline cursor-pointer"
      >
        <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
        <img
          src={card.img}
          className="rounded-t card_img"
          alt="Quantum Article"
        />
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
      <Navbar />

      <h1 className="lg:text-5xl text-4xl font-bold text-center mt-8 mb-6">{tagname}</h1>

      <div className="bg-slate-100 w-full article">
        <div className="mx-auto flex  justify-center">
        </div>
        <div className="flex lg:flex-row flex-col p-8 card_container">

          {
         filteredArticles.length === 0  ? (<h1 className="text-4xl font-semibold text-center mt-10">Post Coming Soon</h1>) : filteredArticles.map(allcards)
          }
 
        </div>
      </div>


    </>
  );
};

export default Tags;
