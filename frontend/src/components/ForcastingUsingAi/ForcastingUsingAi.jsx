import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ForcastingUsingAi.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import {
  faShare,
  faPrint,
  faDownload,
  faSave,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga';

import image1 from '../assets/forcastingAi/forecasting-using-ai-654b1bf97eb0c.webp';
import image2 from '../assets/forcastingAi/img2.jpg';
import image3 from '../assets/forcastingAi/img3.jpg';
import image7 from '../assets/Article1/logo.png';
import card1 from '../assets/Article1/card1.png';

// Card images

import card_image1 from '../assets/rodbust_ai/img_1r.webp';
import card_image2 from '../assets/Nlp_img/nlp_bannerr.webp';
import card_image3 from '../assets/ComputerVision/img1r.webp';

// Card images ends

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Footer from '../Foot/Foot';

const ForcastingUsingAi = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const Title = 'Forecasting using AI';
  const navigate = useNavigate();

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [progressdropdownVisible, setprogressDropdownVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [isDivVisible, setIsDivVisible] = React.useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // check if the target of the click event is not the dropdown or the share icon
      if (
        dropdownVisible &&
        event.target.closest('.share-icon') === null &&
        event.target.closest('.dropdown') === null
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the target of the click event is not the dropdown or the share icon
      if (
        progressdropdownVisible &&
        event.target.closest('.share-icon-progress') === null &&
        event.target.closest('.progress-dropdown') === null
      ) {
        setprogressDropdownVisible(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [progressdropdownVisible]);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progressPercentage = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progressPercentage);

      if (imageRef.current && scrollPosition > imageRef.current.offsetHeight) {
        setIsDivVisible(true);
      } else {
        setIsDivVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);

  const toggleAudioPlayerVisibility = () => {
    setIsAudioPlayerVisible(!isAudioPlayerVisible);
  };

  // Saving the article code

  const [message, setmassage] = useState('');
  const handleSaveArticle = async () => {
    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth);

    if (user) {
      let res = await fetch('/update_article', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          id: user._id,
          article: 'Forcasting using ai',
          title: 'Introduction: When AI starts to predict Future',
          date: 'September 4, 2023',
          url: 'ForcastingUsingAi',
        }),
      });
      const data = await res.json();
      console.log(data);
      setmassage(data.message);

      setTimeout(() => {
        setmassage('');
      }, 2000);
    } else {
      // setmassage('Please login first');
      navigate('/login')
      setTimeout(() => {
        setmassage('');
      }, 2000);
    }
  };

  // links
  function shareOnLinkedIn() {
    var url = 'https://www.aiproff.ai/ForcastingUsingAi';
    var linkedinUrl =
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent(url);
    window.open(linkedinUrl, '_blank');
  }

  function shareOnTwitter() {
    // Replace 'your-twitter-share-url' with the URL you want to share on Twitter.
    var url = 'https://www.aiproff.ai/ForcastingUsingAi';
    window.open(
      'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url),
      '_blank'
    );
  }

  function shareOnFacebook() {
    // Replace 'your-facebook-share-url' with the URL you want to share on Facebook.
    var url = 'https://www.aiproff.ai/ForcastingUsingAi';
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
      '_blank'
    );
  }

  function shareByEmail() {
    // Replace 'your-email-share-url' with the URL you want to share via email.
    var url = 'https://www.aiproff.ai/ForcastingUsingAi';
    window.location.href = 'mailto:?body=' + encodeURIComponent(url);
  }

  return (
    <>

<Helmet>
                {/* <link href="https://www.aiproff.ai/forecasting-using-ai" rel="canonical" /> */}
              </Helmet>

      <Navbar />
      <div className="article">
        <div className=" article space-y-2 mx-auto flex flex-col justify-center">
          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
          >
            <img
              ref={imageRef}
              src={image1}
              alt="Generative AI"
              className="w-full object-cover opacity-0"
            />

            <div className="max-w-5xl md:absolute inset-0 flex flex-col justify-center items-center p-6 mx-auto lg:mt-20 lg:pt-12">
              {/* <h1 className="text-4xl md:text-5xl font-semibold mb-2 z-10 leading-relaxed banner_text">
                Forecasting using AI
              </h1> */}
              <div className="w-full flex justify-start items-center">
                {/* <p className="mt-2">September 4, 2023</p> */}
              </div>
            </div>
          </div>

          {message && (
            <div
              className="px-3 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg massege_alrt"
              role="alert"
            >
              <p>{message}</p>
            </div>
          )}

          <div className="mx-auto lg:max-w-7xl flex flex-col justify-center p-16 article_padding">
            <h1 className="text-4xl font-bold mb-8 upper_heading">
              Introduction: When AI starts to predict Future
            </h1>
            <div className="md:flex md:justify-between md:w-4/5 space-y-8 md:space-y-0">
              <div className="underline underline-offset-4">
                <Link to="/">By AiProff</Link>
              </div>
              <div>
                {isAudioPlayerVisible ? (
                  <AudioPlayer
                    audio="/audio_files/Forecasting Using AI.mp3"
                    onClose={toggleAudioPlayerVisibility}
                    Title={Title}
                  />
                ) : (
                  <button
                    className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-400"
                    onClick={toggleAudioPlayerVisibility}
                  >
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Play
                  </button>
                )}
              </div>
              <div className="flex space-x-4">
                <div className="relative">
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon"
                    onClick={() => setDropdownVisible(!dropdownVisible)}
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {dropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble dropdown">
                      <div
                        className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                        onClick={shareOnLinkedIn}
                      >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div
                        className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                        onClick={shareOnTwitter}
                      >
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div
                        className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                        onClick={shareOnFacebook}
                      >
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div
                        className="flex items-center py-1 hover:bg-blue-100 cursor-pointer"
                        onClick={shareByEmail}
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Forecasting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>
                </Link>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Forecasting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link>

                <div
                  className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer"
                  onClick={handleSaveArticle}
                >
                  <FontAwesomeIcon
                    icon={faSave}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div className=" mt-12 text-lg md:text-xl font-light leading-normal space-y-6 md:flex justify-center">
              <div className="flex-grow md:w-4/6 space-y-20 justify-center">
                <div>
                  <div>
                    <h1 className="text-4xl font-bold mb-6 lower_heading">
                      Introduction: When AI starts to predict Future
                    </h1>
                  </div>
                  <div>
                    <p className="mb-5">
                      Forecasting is the art and science of predicting future
                      events or outcomes based on past and present data.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      {' '}
                      It is a crucial skill for many domains, such as business,
                      economics, weather, sports, and health. Forecasting is the
                      process of using historical data, trends, and statistics
                      to predict future outcomes or events. Forecasting has
                      immense applications: from predicting weather patterns and
                      the movement of stocks, to evaluating economies of
                      countries, scientific research, and so on.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      However, forecasting can also be challenging, complex, and
                      uncertain, especially if you are dealing with large and
                      dynamic data sets. That's where the power of artificial
                      intelligence (AI) comes in.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      AI is the branch of computer science that aims to create
                      machines or systems that can perform and automate tasks
                      that normally require human intelligence – such as
                      learning, reasoning, and decision making. These AI
                      machines are not only efficient and fast, but also hold
                      the capability to ‘mimic’ human intelligence to carry out
                      tasks dynamically.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      AI is transforming the way we forecast and plan for the
                      future. By using machine learning algorithms, AI can
                      analyse large amounts of data and identify patterns,
                      trends and anomalies that can help us make better
                      decisions. AI forecasting has applications in various
                      domains such as the stock market, e-commerce, climate
                      change, healthcare, customer service and more.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      For example, AI can help investors predict the movements
                      of the stock market and optimise their portfolio
                      strategies. AI can also help e-commerce businesses
                      forecast the demand for their products and services and
                      optimise their inventory, pricing and promotions. AI can
                      also help meteorologists forecast the weather and climate
                      change more accurately and communicate the risks to the
                      public. AI can also help healthcare providers forecast the
                      spread of diseases and personalise treatments for
                      patients.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      Forecasting is important for various domains such as
                      business, finance, weather, etc. because it helps them
                      plan ahead, optimise resources, reduce risks, and seize
                      opportunities.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p>
                      So if you want to explore how using AI in forecasting
                      could help boost your productivity, and minimise errors,
                      then read ahead. In this post, we will explore how
                      AI-aided forecasting can enhance forecasting by providing
                      more accurate, timely, and flexible predictions based on
                      large and complex data sets.
                    </p>
                  </div>
                </div>

                <div className="space-y-8 ">
                  <div>
                    <h1 className="text-4xl font-bold extra_space">
                      Forecasting demystified: How is AI able to forecast
                    </h1>
                  </div>
                  <p>
                    Traditional forecasting employs the concepts of statistics
                    and forecasting methods such as time-series analysis,
                    regression analysis, and qualitative judgement.
                  </p>
                  <p>
                    However, integrating AI supercharges the whole process and
                    makes the forecasting easier.
                  </p>
                  <p>
                    Deep Learning algorithms and classical Time Series
                    algorithms both do forecasting, however deep learning models
                    do a better job. This is due to their capability of
                    extracting more detailed features of historical and recent
                    data than classical time series models like ARIMA ,
                    Exponential Smoothing models etc.
                  </p>
                  <p>
                    AI can forecast future events or outcomes based on
                    historical data and current conditions, using techniques
                    such as neural networks, deep learning, machine learning,
                    etc. Machine learning is a general term for any technique
                    that allows a computer system to learn from data and improve
                    its performance without explicit programming. Neural
                    networks are a type of machine learning that consists of
                    layers of connected nodes that process information and learn
                    from the training data. Deep learning is a specific kind of
                    neural network that uses multiple layers of nodes to learn
                    complex features and patterns from large amounts of data.
                  </p>
                  <p>
                    This not only automates the task of forecasting but also
                    helps the forecasters to find never-before-seen trends.
                    Moreover, these forecasts are carried out without human
                    judgement and bias, which is the reason why such forecasts
                    tend to be far less erroneous.
                  </p>
                  <p>
                    AI-based forecasting is used in many domains, such as
                    weather forecasting, stock market prediction, demand
                    forecasting, etc.
                  </p>
                </div>

                <div>
                  <img src={image2} alt="graph-economic-impact" />
                  <p className="mt-4 mb-5">
                    Interestingly, according to an article by{' '}
                    <a
                      href="https://techjury.net/blog/ai-statistics/"
                      target="_blank"
                      className="links"
                    >
                      {' '}
                      TechJury{' '}
                    </a>
                    , AI is becoming more and more prevalent in business
                    analytics. 35% of companies are using AI in some way, while
                    42% of companies are investigating how to implement AI in
                    the future.
                  </p>
                  <p className="mb-5">
                    What makes AI so appealing for business analysts and
                    forecasters? Here are 5 main benefits of using AI for
                    forecasting -
                  </p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      <b>Efficient use of Time series data:</b> AI tools use the
                      time series data much more efficiently to estimate future
                      developments and forecast trends. For example, the AI tool
                      can use the time series data of a company's sales to
                      forecast how much revenue it will generate in the next
                      quarter, or an AI tool can use the time series data of a
                      patient's blood pressure to detect any anomalies or risks.{' '}
                    </li>
                    <li className="mb-3">
                      <b>Autonomous and continuous reconfiguration:</b> AI-based
                      forecasting solutions are fully autonomous, continuously
                      reconfiguring projections as patterns change to better
                      inform decision-making. This is especially useful for
                      enterprises whose product or service is affected by
                      seasonal trends, customer preferences, and external
                      factors such as weather, competitors, and regulations.
                      Automation and continuous reconfiguration help the AI to
                      find optimised and efficient solutions.{' '}
                    </li>
                    <li className="mb-3">
                      <b>Faster and better decision-making:</b> employing
                      machines with AI capabilities to conduct forecasts using
                      machine learning algorithms would streamline and optimise
                      the demand forecasting processes. This allows enterprises
                      to plan and execute forecasting operations faster, thereby
                      having more time to make better decisions.
                    </li>
                    <li className="mb-3">
                      <b>Improved forecast accuracy:</b> A human forecaster can
                      bring time series data, and AI can further enhance the
                      forecast using forecasting algorithms. Using AI can be
                      helpful to minimise human bias, and can thus create a more
                      accurate picture of demand. This improves forecast results
                      compared to traditional forecasting methods.
                    </li>
                    <li className="mb-3">
                      <b>Real-time data and pattern identification:</b> By far
                      the biggest advantage of using AI-powered forecasting.
                      AI-driven forecasting allows forecasters to do real-time
                      data analysis faster and more efficiently and continuously
                      identify new patterns. Thus, automation allows forecasters
                      to make real-time forecasts, enabling enterprises to plan
                      better.{' '}
                    </li>
                  </ul>
                  <p>
                    However, AI-based forecasting has its caveats, which it
                    inherits from the AI architecture itself.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      Pros and Cons, and Predicting with Confidence using
                      AiProff
                    </h1>
                  </div>
                  <p>
                    There are many benefits of using AI for forecasting, some of
                    which you saw in the previous section.{' '}
                  </p>
                  <div>
                    <img src={image3} alt="this is img" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                    The demand for AI-based forecasts in businesses is rapidly
                    increasing. Interestingly, AI forecasts are employed not
                    only on the analyst front but also in the field of product
                    management, decision making and data Augmentation. Source:
                    <a
                      href="https://peak.ai/hub/blog/ai-demand-forecasting/"
                      target="_blank"
                      className="links"
                    >
                      {' '}
                      Peak.ai{' '}
                    </a>
                  </p>
                  <p>
                    Enterprises favour AI-enabled forecasting due to the
                    following advantages -
                  </p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      <b>Accuracy:</b> AI forecasting can achieve higher
                      accuracy than humans. This is because AI can learn from
                      large amounts of data and find complex patterns and
                      relationships efficiently.
                    </li>
                    <li className="mb-3">
                      <b>Speed:</b> AI forecasting can process data and generate
                      predictions faster than human analysts – which not only
                      saves time but also valuable resources to conduct the
                      forecast.
                    </li>
                    <li className="mb-3">
                      <b>Scalability:</b> AI forecasting can handle large-scale
                      and high-dimensional data that can work at par with expert
                      human analysts. Moreover, AI forecasts can provide
                      comprehensive and granular analysis of complex and dynamic
                      phenomena – such as market trends, customer behaviour, or
                      climate change.
                    </li>
                    <li className="mb-3">
                      <b>Adaptability:</b> AI forecasting can adapt to changing
                      conditions, account for additional data, and update and
                      improve its models automatically to the needs and
                      requirements. This makes forecasting using AI adaptable,
                      and much more reliable and robust.
                    </li>
                  </ul>
                  <p>
                    However, to get the complete picture, forecasting using AI
                    isn’t going to be perfect. If your AI model isn’t a reliable
                    and robust AI architecture, then the forecasting model is
                    bound to errors which could cost the enterprise a fortune if
                    overlooked.{' '}
                  </p>
                  <p>AI forecasting is challenging due to following reasons:</p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      <b>Hallucinations:</b> Hallucinations are a phenomenon
                      where the AI model makes up its own outputs that are not
                      consistent with the input data or the expected patterns.
                      This can lead to inaccurate or misleading predictions,
                      which can affect future forecasting heavily.
                    </li>
                    <li className="mb-3">
                      <b>Data quality:</b> AI forecasting depends on the quality
                      and availability of data. The better the quality, the
                      better the prediction. Poor or incomplete data can lead to
                      inaccurate or biased predictions. Moreover, it can be a
                      challenge due to data privacy and security issues which
                      can limit the access and use of data.
                    </li>
                    <li className="mb-3">
                      <b>Infrastructure and Complexity:</b> AI forecasting, just
                      like any other field of AI, can be difficult to understand
                      and explain. They are dependent on the AI model and the
                      infrastructure. The deep learning models use multiple
                      layers of nonlinear transformations, which can reduce
                      their transparency and trustworthiness. If it is not
                      handled by people having expertise in reliable AI
                      architecture, this could cost the enterprise both
                      resources and time.
                    </li>
                    <li className="mb-3">
                      <b>Human Bias:</b> Having human bias in AI forecasting can
                      have negative impacts on fairness, diversity, and
                      inclusion of the predictions. This is usually overlooked
                      because of bad practices in data handling, or using
                      inefficient AI models. Therefore, it is important to
                      identify and mitigate the sources of human bias in the
                      data and the AI models and to evaluate the forecasts with
                      appropriate metrics and methods.
                    </li>
                  </ul>

                  <p>
                    Therefore, it is important to make sure that you and your
                    enterprise use AI forecasting responsibly, with human
                    oversight. It is important to partner with experts who can
                    help you implement AI forecasting solutions that are
                    tailored to your specific needs and goals.
                  </p>
                </div>
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      That's where AiProff comes in.
                    </h1>
                  </div>
                  <div>
                    <img src={image7} alt="" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                    AiProff is a leading provider of AI and ML-based solutions
                    for enterprises across various domains in Reliable and
                    Robust AI. AiProff can help you leverage the power of AI
                    forecasting to improve your performance, efficiency and
                    competitiveness.
                  </p>
                  <p>
                    We provide state-of-the-art solutions as Minimum Viable
                    Products for Enterprises and Academic Institutions,
                    leveraging cutting-edge AI/ML solutions to lower the entry
                    barrier and expedite time to market.
                  </p>
                  <p>
                    <b>
                      Contact AiProff today to find out how they can help you
                      achieve your forecasting objectives with AI. Contact us
                    </b>
                  </p>
                  <p>
                    Don’t let your critical and essential AI/ML workloads be at
                    the mercy of naive assumptions.
                  </p>
                  <p>
                    Let’s secure and safeguard your innovation, and efficiencies
                    to establish a robust and sustainable growth trajectory.
                  </p>
                </div>
              </div>

              <div
                className="ml-8 lg:ml-12 lg:w-3/12 border-y-2 border-black border-b-0 p-4 lg:pl-8 flex flex-col items-start space-y-8"
                style={{ height: '12rem' }}
              >
                <div className="text-2xl font-normal">Downloads</div>

                <div className="flex flex-row text-blue-600 hover:underline underline-offset-4 mb-4 space-x-2">
                  <Link
                    to="https://ingestionpeekai.s3.amazonaws.com/Forecasting.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="space-x-4"
                  >
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-base">Full Article</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isDivVisible ? (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-0 space-y-2">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                  Introduction: When AI starts to predict Future
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {' '}
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon-progress"
                    onClick={() =>
                      setprogressDropdownVisible(!progressdropdownVisible)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {progressdropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble progress-dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer " onClick={shareOnLinkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnTwitter}>
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnFacebook}>
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareByEmail}>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Forecasting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>
                </Link>
                
                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Forecasting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link>

                <div
                  className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer"
                  onClick={handleSaveArticle}
                >
                  <FontAwesomeIcon
                    icon={faSave}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div
              id="scrollProgress"
              className="h-1 bg-blue-500 transition-all duration-0 "
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        ) : (
          <div className="fixed article top-0 left-0 w-full h-15 bg-white z-50 border-b-4 transition-all duration-500 transform translate-y-[-100%]">
            <div className="max-w-3xl lg:max-w-6xl px-8 lg:px-4 md:mx-auto flex justify-center  md:justify-between items-center pt-4">
              <div>
                <h1 className="hidden md:flex text-xl">
                  Introduction: When AI starts to predict Future
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {' '}
                  <div
                    className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer share-icon-progress"
                    onClick={() =>
                      setprogressDropdownVisible(!progressdropdownVisible)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faShare}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Share</span>
                  </div>
                  {progressdropdownVisible && (
                    <div className="mt-2 p-4 px-6 absolute left-[-50%] ml-3 border-2 rounded shadow-lg bg-white z-10 chat-bubble progress-dropdown">
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnLinkedIn}>
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnTwitter}>
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareOnFacebook}>
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer" onClick={shareByEmail}>
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        Email
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/Forecasting.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="hover:text-blue-500 cursor-pointer"
                    />
                    <span className="text-sm">Download</span>
                  </div>
                </Link>

                <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faSave}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Save</span>
                </div>
              </div>
            </div>

            <div
              id="scrollProgress"
              className="h-1 bg-blue-500 transition-all duration-0 "
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        )}
      </div>

      <div className="bg-slate-100 w-full article">
        <div className="mx-auto flex  justify-center  ">
          <h1 className="text-3xl md:text-4xl font-semibold mt-12">
            Related Articles
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col p-8 card_container">
        <Link
                  to={'/reliable-and-robust-ai'}
                  className="mx-1 text-blue-600 no-underline  cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={card_image1}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

                  <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction: Reliable and Robust AI
              </p>
              <p>The field of Artificial intelligence (AI) is rapidly evolving. It is tapping</p>
             
            </div>
          </div>
          </Link>

          <Link
                  to={'/introduction-to-nlp'}
                  className="mx-1 text-blue-600 no-underline  cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={card_image2}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

                <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction to NLP: When AI talks
              </p>
              <p>
              The field of Artificial intelligence is exciting. Under this discipline of Technology,
              </p>
              
              <h1>
              </h1>
            </div>
          </div>
          </Link>

               <Link
                  to={'/computer-vision'}
                  className="mx-1 text-blue-600 no-underline cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={card_image3}
              className="rounded-t card_img"
              alt="Quantum Article"
            />
            <div className="p-4">

              <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction to Computer Vision: When Machines Start to See
              </p>
              <p>
              The quest for intelligence has been going on for ages, and the question of 
              </p>
             
            </div>
          </div>
        </Link>
        </div>
      </div>

      <div className="mt-0 pt-4 border-2">
        <Footer />
      </div>
    </>
  );
};

export default ForcastingUsingAi;
