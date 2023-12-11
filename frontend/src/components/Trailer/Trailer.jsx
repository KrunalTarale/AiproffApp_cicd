import  { useState } from 'react';
// import image1 from '../assets/trailer2.webp';
// import image2 from '../assets/trailer1.webp';
import './Trailer.css';
import { Link } from 'react-router-dom';

const Trailer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredtwo, setIsHoveredtwo] = useState(false);

  return (
    <div>
      {/* Row 1 */}

      <div className="lg:flex trailer ">
        <div className="flex lg:w-1/2">
          {/* <img
            src={image1}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          /> */}
        </div>
        <div className="lg:w-1/2 p-10 lg:space-y-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
              From Vision to Reality: How Applied AI is Reshaping Our World!
            </h1>
          </div>
          <div className="mt-4">
            {' '}
            <p className="leading-loose text-md md:text-xl   text-black">
              Explore the world of applied AI, where futuristic dreams are
              transforming into real-world solutions. Dive deep into the this
              realms of artificial intelligence and deep learning, and see how
              it is used in predicting market trends and early disease detection
              to driving self-autonomous vehicles.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              <Link
                to="/applied-ai"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHovered ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                What, why and How of Applied AI
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHovered ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </p>

            {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
              <a
                href="#"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHoveredtwo ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHoveredtwo(true)}
                onMouseLeave={() => setIsHoveredtwo(false)}
              >
                See how Applied AI is used in AI Based Forecasting [link to
                forecasting using AI]
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHoveredtwo ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </p> */}
          </div>
        </div>
      </div>

      <div className="lg:flex flex-row-reverse trailer ">
        <div className="flex lg:w-1/2">
          {/* <img
            src={image2}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          /> */}
        </div>
        <div className="lg:w-1/2 p-10  flex justify-end">
          <div className="lg:max-w-3xl lg:space-y-10">
            <div>
              <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
                From Words to Wisdom: Harnessing the Power of NLP for the Future
              </h1>
            </div>
            <div className="mt-4">
              {' '}
              <p className="leading-loose text-md md:text-xl   text-gray-700">
                Explore the transformative journey of Natural Language
                Processing (NLP), tracing its roots back to the 1940s and its
                revolutionary breakthrough in 2017. Discover how NLP is
                reshaping modern enterprises with applications like chatbots and
                language translation. Dive into the ethical considerations
                surrounding NLP and learn how to mitigate the risks of
                misinformation.
              </p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 dark:text-gray-400">
                <Link
                  to="/introduction-to-nlp"
                  className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                    isHovered ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Explore various NLP Techniques and Methods used in Modern AI
                  Applications
                  <svg
                    className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                      isHovered ? 'translate-x-2' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </p>

              {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
                <Link
                  to="/nlp/#nlp-benefits:~:text=NLP%20Benefits%20and%20Shortcomings%3A%20Misinformations%20and%20Hallucinationss"
                  className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                    isHoveredtwo ? 'hovered' : ''
                  }`}
                  onMouseEnter={() => setIsHoveredtwo(true)}
                  onMouseLeave={() => setIsHoveredtwo(false)}
                >
                  NLP is now being used to upgrade Computer Vision. Explore How?
                  <svg
                    className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                      isHoveredtwo ? 'translate-x-2' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Third COmponent                       */}

      <div className="lg:flex trailer ">
        <div className="flex lg:w-1/2">
          <img
            src={image1}
            alt="Left"
            className="w-full h-auto md:ml-0 md:mr-4 object-cover"
          />
        </div>
        <div className="lg:w-1/2 p-10 lg:space-y-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold leading-snug">
              Navigating the AI Landscape: Building Reliable and Robust Systems
            </h1>
          </div>
          <div className="mt-4">
            {' '}
            <p className="leading-loose text-md md:text-xl   text-gray-700">
              Explore the strategies, advantages, challenges, and best practices
              that pave the way to a Relibale and Robust AI Application. Get
              yourself accquaint in the world of reliable and robust AI, where
              innovation meets assurance with trustworthy AI solutions in
              healthcare, finance, and beyond. Discover how to create a future
              where AI is not just a tool, but a reliable partner in shaping
              industries
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              <Link
                to="/reliable-and-robust-ai"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHovered ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Discover the Check-list on creating an Reliable and Robust AI
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHovered ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </p>

            {/* <p className="text-gray-500 dark:text-gray-400 mt-4">
              <a
                href="#"
                className={`inline-flex items-center font-semibold text-black hover:text-blue-700 hover:no-underline ${
                  isHoveredtwo ? 'hovered' : ''
                }`}
                onMouseEnter={() => setIsHoveredtwo(true)}
                onMouseLeave={() => setIsHoveredtwo(false)}
              >
                Challenges and Risks in Reliable and Robust AI
                <svg
                  className={`w-4 h-4 ml-2 text-blue-600 dark:text-blue-700 transition-transform ${
                    isHoveredtwo ? 'translate-x-2' : ''
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
