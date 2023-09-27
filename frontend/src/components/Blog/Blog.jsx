import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import { useState } from 'react';
import './blog.css';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const articles = [
    {
      title: 'Applied AI: When AI solves real world problems ',
      subTitle:
        'Artificial Intelligence is a promising technological marvel that holds the key to the future. ',
      imageUrl:
        'https://miro.medium.com/v2/resize:fill:140:140/1*xGMde9uuUeHNIRShrkBRSA.jpeg',
      readTime: '3 min',
      date: 'Sept 23, 2023',
      publisher: 'Applied AI',
    },
    {
      title: 'Introduction to Computer Vision: When Machines Start to See',
      subTitle: 'The quest for intelligence has been going on for ages, ',
      imageUrl:
        'https://miro.medium.com/v2/resize:fill:140:140/0*_i9J5BLER8FSyMWb',
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
    },
    {
      title: 'Introduction: When AI starts to predict Future',
      subTitle:
        'Forecasting is the art and science of predicting future events or outcomes based on past and present data. ',
      imageUrl:
        'https://miro.medium.com/v2/resize:fill:140:140/1*kfpE5sUY6tXRFech4Ju2gg.png',
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
    },
    {
      title: 'Introduction to NLP: When AI talks',
      subTitle:
        'The field of Artificial intelligence is exciting. Under this discipline of Technology, machines can talk',
      imageUrl:
        'https://miro.medium.com/v2/resize:fill:140:140/1*rEZoI7uE1NiTN6WV2bAbHw.png',
      readTime: '4 min',
      date: 'Sept 22, 2023',
      publisher: 'Applied AI',
    },
  ];

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
                <h1 className="text-2xl font-bold mt-2 font-serif">
                  {article.title}
                </h1>
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
