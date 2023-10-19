import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import { useState } from 'react';
import './blog.css';
import { Link } from 'react-router-dom'

// Blog Images
import image1 from "../assets/Article1/Appliedair.webp";
import image2 from "../assets/rodbust_ai/img_1r.webp";
import image3 from "../assets/Nlp_img/nlp_bannerr.webp";
import image4 from "../assets/ComputerVision/img1r.webp";
import image5 from "../assets/forcastingAi/ForcastingusingAIr.webp";

const Blog = () => {


  const articles = [
    {
      title: 'Applied AI: When AI solves real world problems ',
      subTitle:
        'Artificial Intelligence is a promising technological marvel that holds the key to the future. ',
      imageUrl: image1,
      readTime: '3 min',
      date: 'Sept 23, 2023',
      publisher: 'Applied AI',
      link : '/article'
    },
    {
      title: 'Introduction: Reliable and Robust AI',
      subTitle: 'The field of Artificial intelligence (AI) is rapidly evolving.  ',
      imageUrl:image2,
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
      link: '/Realaible_And_RodbustAi'
    },

  ];

  const allarticles = [
    {
      title: 'Introduction to NLP: When AI talks',
      subTitle:
        'The field of Artificial intelligence is exciting. Under this discipline of Technology, machines can talk, ',
      imageUrl:image3,
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
      link: '/nlp'
    },
    {
      title: 'Introduction to Computer Vision: When Machines Start to See',
      subTitle:
        '"A computer deserves to be called intelligent if it could deceive a human into believing that it was human.”',
      imageUrl:image4,
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
      link: '/Computer_Vision'
    },
    {
      title: 'Introduction: When AI starts to predict Future',
      subTitle:
        '"Forecasting is the art and science of predicting future events or outcomes based on past and present data.”',
      imageUrl:image5,
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
      link: '/ForcastingUsingAi'
    },
  ]

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/subscribe_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json();
    if (data) {
      setStatus(data.status);
      setEmail('');
    }
  };

  // const topics = [
  //   'Internet Of Things',
  //   'Machine Learning',
  //   'Data Visualization',
  //   'Data Engineering',
  //   'Cloud Computing',
  //   'ML Ops',
  //   'Deep Learning in NLP',
  //   'Deep Learning in Computer Vision',
  // ];

  const topics = [
    {
      name : "Deep Learning",
      link : "/deep_learning"
    },
    {
      name : "Computer Vision",
      link : "/computer_vision"
    },
    {
      name : "Natural Language Processing",
      link : "/natural_language_processing"
    },
    {
      name : "Streaming Data Analytics",
      link : "/streaming_data_analytics"
    },
    {
      name : "Embedded ML",
      link : "/embedded_ML"
    },
    {
      name : "TinyML, Edge AI",
      link : "/TinyML_Edge AI"
    },
    {
      name : "IIOT",
      link : "/IIOT"
    },
    {
      name : "Predictive Analytics",
      link : "/Predictive_Analytics"
    },
    {
      name : "Data Analytics",
      link : "/Data_Analytics"
    },
    {
      name : "Forecasting (Time Series Analysis)",
      link : "/Forecasting"
    },
    {
      name : "Technology Frameworks",
      link : "/Technology_Frameworks"
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="blog flex flex-col-reverse lg:flex-row items-start justify-center w-full md:mb-14 px-4 xl:px-0">
        <div className="space-y-5 lg:w-3/5 xl:w-2/5 p-4">
          {articles.map((article, idx) => (
            <div
            key={idx}
            className="flex space-x-6 border-b-2 border-black items-start hover:bg-gray-100 p-4 transition duration-200 cursor-pointer"
            >
          

              <div className="flex-1">
                <div className="text-gray-500 text-sm">
                  {article.date} • by {article.publisher}
                </div>
                <Link to={article.link}>
                <h1 className="text-2xl font-bold mt-2 font-serif">
                  {article.title}
                </h1>
                </Link>
                <p className="text-gray-700 mt-2 ">{article.subTitle}</p>
                <div className="text-sm text-gray-600 mt-2">
                  {article.readTime} read
                </div>
              </div>


              <div>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                />
              </div>

            </div>
          ))}

          {allarticles.map((article, idx) => (
            <div
            key={idx}
            className="flex space-x-6 border-b-2 border-black items-start hover:bg-gray-100 p-4 transition duration-200 cursor-pointer"
            >
    
              <div className="flex-1">
                <div className="text-gray-500 text-sm">
                  {article.date} • by {article.publisher}
                </div>
                <Link to={article.link}>
                <h1 className="text-2xl font-bold mt-2 font-serif">
                  {article.title}
                </h1>
                </Link>
                <p className="text-gray-700 mt-2 ">{article.subTitle}</p>
                <div className="text-sm text-gray-600 mt-2">
                  {article.readTime} read
                </div>
              </div>


              <div>
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-48 h-32 object-cover rounded-lg shadow-md"
                />
              </div>

            </div>
          ))}


          <div className=" p-4  mobile_discover">
            <div>
              <h2 className="text-2xl font-bold">Discover more topics:</h2>
            </div>
            <div className="max-w-screen mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-2 gap-5 pt-6">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  className="bg-gray-200 text-black rounded-lg p-2  cursor:pointer hover:bg-blue-600 hover:text-white"
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>
        </div>


        <div className="space-y-14 flex flex-col-reverse lg:flex-col ">
          <div className="hidden lg:block xl:max-w-md w-full  bg-[#051C2C] text-white p-10 lg:p-20 mt-10 lg:ml-2  ">
            <div className="space-y-5 ">
              <h1 className="text-2xl font-bold text-center">
                Never Miss A Story
              </h1>

              <div className="space-y-4 ">
                <div className="flex justify-center">
                  <h2 className="text-md mb-4 lg:max-w-xs text-center">
                    Stay updated about AiProff news as it happens
                  </h2>
                </div>

                    <p>{status}</p>
                <div className="flex justify-center">
                  <div className="flex text-black">
                    <input
                      type="email"
                      className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" p-4  desktop_discover">
            <div>
              <h2 className="text-2xl font-bold">Discover more topics:</h2>
            </div>
            <div className="max-w-screen mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-2 gap-5 pt-6">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  className="bg-gray-200 text-black rounded-lg p-2  cursor:pointer hover:bg-blue-600 hover:text-white"
                >
                  {topic.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden xl:max-w-md w-full  bg-[#051C2C] text-white p-10 lg:p-20 mt-10 lg:ml-2  ">
        <div className="space-y-5 ">
          <h1 className="text-2xl font-bold text-center">Never Miss A Story</h1>

          <div className="space-y-4 ">
            <div className="flex justify-center">
              <h2 className="text-md mb-4 lg:max-w-xs text-center">
                Stay updated about AiProff news as it happens
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="flex text-black">
                <input
                  type="email"
                  className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 ">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
