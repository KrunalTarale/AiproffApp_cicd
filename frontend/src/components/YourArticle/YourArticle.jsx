import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react';
import './YourArticle.css';

const YourArticle = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [allarticles, setArticles] = useState([]);

  const getArticles = async () => {
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);
    console.log(user._id);

    let res = await fetch('/get_user_article/'+user._id , {
        method: 'GET'
    });
    let data = await res.json();
    setArticles(data[0].articles); 
    
}

  useEffect(() => {
    getArticles();
  })

  // const articles = [
  //   {
  //     title: 'Applied AI: When AI solves real world problems ',
  //     subTitle:
  //       'Artificial Intelligence is a promising technological marvel that holds the key to the future. ',
  //     imageUrl:
  //       'https://miro.medium.com/v2/resize:fill:140:140/1*xGMde9uuUeHNIRShrkBRSA.jpeg',
  //     readTime: '3 min',
  //     date: 'Sept 23, 2023',
  //     publisher: 'Applied AI',
  //   },
  //   {
  //     title: 'Introduction to Computer Vision: When Machines Start to See',
  //     subTitle: 'The quest for intelligence has been going on for ages, ',
  //     imageUrl:
  //       'https://miro.medium.com/v2/resize:fill:140:140/0*_i9J5BLER8FSyMWb',
  //     readTime: '4 min',
  //     date: 'Sept 22, 2023',
  //     publisher: 'Applied AI',
  //   },
  // ];

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

  const topics = [
    'Programming',
    'Data Science',
    'Technology',
    'Self Improvement',
    'Writing',
    'Relationships',
    'Machine Learning',
    'Productivity',
    'Politics',
  ];

  return (
    <div className="min-h-screen flex flex-col h-full YourArticle">
      <div className="flex-shrink-0">
        <Navbar />
      </div>
      <div className="flex justify-center  lg:w-2/5 xl:w-2/6 pt-12 pb-5">
        <h1 className="text-3xl lg:text-4xl font-bold">Your Saved Articles :</h1>
      </div>
      <div className="  flex flex-col-reverse lg:flex-row items-start justify-center w-full md:mb-14  px-4 xl:px-0 bg-white flex-grow">

<div className="space-y-5 lg:w-3/5 xl:w-2/5 p-4">
  {allarticles.length === 0 ? (
    <div className="text-xl font-semibold">You didn't save any articles</div>
  ) : (
    allarticles.map((article, idx) => (
      <Link to={`/${article.url}`} key={idx}>
      <div
        className="flex space-x-6 border-b-2 border-black items-start hover:bg-gray-100 p-4 transition duration-200 cursor-pointer"
      >
        <div className="flex-1">
          <div className="text-gray-500 text-sm">
            {article.date}
          </div>
          <h1 className="text-2xl font-bold mt-2 font-serif">
            {article.title}
          </h1>
          {/* ... (rest of the article rendering code) ... */}
        </div>
        <div>
          {/* ... (image rendering code) ... */}
        </div>
      </div>
      </Link>
    ))
  )}
</div>


        <div className="space-y-14 flex flex-col-reverse lg:flex-col ">
          <div className=" p-4  ">
            <div>
              <h2 className="text-2xl font-bold">Discover more topics:</h2>
            </div>
            <div className="max-w-screen mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-2 xl:grid-cols-3 gap-5 pt-6">
              {topics.map((topic, index) => (
                <button
                  key={index}
                  className="bg-gray-200 text-black rounded-lg p-2  cursor:pointer hover:bg-blue-600 hover:text-white"
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 md:pt-24 pt-12">
        <Footer />
      </div>
    </div>
  );
};

export default YourArticle;
