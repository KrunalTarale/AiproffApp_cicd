import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './RelaibleAndRodbustAi.css';
import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

import image1 from '../assets/rodbust_ai/reliable-and-robust-ai-654b1bf75ef8b.webp';
import image2 from '../assets/rodbust_ai/img_2.jpg';
import image7 from '../assets/Article1/logo.png';
import card1 from '../assets/Article1/card1.png';

// Card images

import card_image1 from '../assets/forcastingAi/ForcastingusingAIr.webp';
import card_image2 from '../assets/Nlp_img/nlp_bannerr.webp';
import card_image3 from '../assets/ComputerVision/img1r.webp';

// Card images ends

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Footer from '../Foot/Foot';

const RealaibleAndRodbustAi = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const Title = 'Reliable and Robust AI';
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
          article: 'Reliable and Robust AI',
          title: 'Introduction: Reliable and Robust AI',
          date: 'September 4, 2023',
          url: 'Realaible_And_RodbustAi',
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
    var url = 'https://www.aiproff.ai/Realaible_And_RodbustAi';
    var linkedinUrl =
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent(url);
    window.open(linkedinUrl, '_blank');
  }

  function shareOnTwitter() {
    // Replace 'your-twitter-share-url' with the URL you want to share on Twitter.
    var url = 'https://www.aiproff.ai/Realaible_And_RodbustAi';
    window.open(
      'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url),
      '_blank'
    );
  }

  function shareOnFacebook() {
    // Replace 'your-facebook-share-url' with the URL you want to share on Facebook.
    var url = 'https://www.aiproff.ai/Realaible_And_RodbustAi';
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
      '_blank'
    );
  }

  function shareByEmail() {
    // Replace 'your-email-share-url' with the URL you want to share via email.
    var url = 'https://www.aiproff.ai/Realaible_And_RodbustAi';
    window.location.href = 'mailto:?body=' + encodeURIComponent(url);
  }

  return (
    <>

              <Helmet>
                <link href="https://www.aiproff.ai/reliable-and-robust-ai" rel="canonical" />
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
              {/* <h1 className="text-4xl md:text-5xl font-semibold mb-2 z-10 header_text leading-relaxed">
                Reliable and Robust AI
              </h1> */}
              <div className="w-full flex justify-start items-center">
                {/* <p className="mt-2 text-slate-100">September 4, 2023</p> */}
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
            <h1 className="text-4xl font-bold mb-6 upper_heading">
              Introduction: Reliable and Robust AI
            </h1>
            <div className="md:flex md:justify-between md:w-4/5 space-y-8 md:space-y-0">
              <div className="underline underline-offset-4">
                <Link to="/">By AiProff</Link>
              </div>
              <div>
                {isAudioPlayerVisible ? (
                  <AudioPlayer
                    audio="audio_files/Reliable and Robust AI.mp3"
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
                  to="https://ingestionpeekai.s3.amazonaws.com/Reliable+%26+Robust+ai.pdf"
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
                  to="https://ingestionpeekai.s3.amazonaws.com/Reliable+%26+Robust+ai.pdf"
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
                      Introduction: Reliable and Robust AI
                    </h1>
                  </div>
                  <div>
                    <p className="mb-4">
                      The field of Artificial intelligence (AI) is rapidly
                      evolving. It is tapping into industries and it exhibits
                      promising transformative impacts across various sectors
                      such as healthcare, education, finance, entertainment, and
                      security.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-4">
                      {' '}
                      AI is no longer a niche technology that only applies to
                      the Tech sector. It has proven its value in various
                      industries that leverage its capabilities, such as
                      automation, analysis, speech recognition and computer
                      vision.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-4">
                      However, to fully unlock its potential, AI systems must be
                      reliable and robust. Reliable and Robust AI are AI systems
                      that are capable of providing consistent and accurate
                      performance under diverse conditions, taking care of
                      unforeseen challenges and technical adversaries.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-4">
                      Reliability and robustness in AI are crucial for ensuring
                      safety, trustworthiness, and fairness. Hence, if an
                      enterprise is planning to integrate AI into its
                      operations, then the reliability and robustness of AI
                      applications are necessary to foster public acceptance and
                      advance AI technologies.
                    </p>
                  </div>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      <b>Explainability and Verification:</b> AI systems should
                      be built in such a way that it is transparent and
                      explainable to the developers and users. This allows them
                      to understand how the model works, how its logic and
                      reasoning capability work, and what caveats one should be
                      aware of before using the AI system.
                    </li>
                    <li className="mb-3">
                      <b>Model Robustness:</b> Reliable AI employs techniques
                      like data augmentation, distributionally robust
                      optimization, and fine-tuning from pre-trained models to
                      enhance the robustness of deep learning models. This
                      ensures that the AI system is not only reliable but also
                      robust.
                    </li>
                    <li className="mb-3">
                      <b>Failure Identification and Validation:</b> AI systems
                      may have errors and failures that affect their
                      performance. Therefore, developers should use methods such
                      as importance sampling, randomised smoothing, and neural
                      network verification to estimate the probability of
                      failure and validate the machine learning models. These
                      methods help to reduce the errors in the AI models and
                      improve their reliability in an enterprise setting.
                    </li>
                    <li className="mb-3">
                      <b>Uncertainty Quantification:</b> Uncertainty
                      quantification (UQ) is a key component of AI systems. UQ
                      aims to measure and communicate the confidence and
                      robustness of AI models. UQ can help identify sources of
                      uncertainty, such as data noise, model misspecification,
                      or adversarial attacks, and mitigate their impact on the
                      performance and safety of AI systems.
                    </li>
                  </ul>
                </div>

                <div className="space-y-8 ">
                  <div>
                    <h1 className="text-4xl font-bold extra_space">
                      Challenges and Risks in Reliable and Robust AI
                    </h1>
                  </div>
                  <p>
                    One of the main goals of reliable and robust AI is to create
                    systems that can perform complex AI tasks across different
                    domains and environments, while still being reliable and
                    robust to uncertainties and errors.
                  </p>
                  <p>
                    AI offers automation, smart analysis and various visual
                    applications such as Natural Language Processing (NLP) and
                    computer vision.
                  </p>
                  <p>
                    However, achieving such AI goals in an enterprise is not
                    trivial. Despite a wide range of potentials and applications
                    of AI, challenges and risks emerge when developing and
                    deploying AI systems that lack reliability or robustness.
                  </p>
                  <p>
                    Below are some of the challenges and risks associated with
                    creating reliable and robust AI:
                  </p>
                  <ul className="list-disc ml-5 mb-5">
                    <li>
                      <b>Safety:</b> AI systems must not cause harm to humans,
                      animals, or the environment, intentionally or
                      unintentionally. The safety aspect of AI is crucial for
                      enterprises of tomorrow that plan to integrate AI
                      responsibly. For instance, self-driving cars must avoid
                      collisions, medical diagnosis systems should not
                      misdiagnose, and military robots should not harm civilians
                      or allies. To combat this, AI models should incorporate
                      efficient architecture, with a failure mechanism installed
                      in case of unforeseen circumstances.
                    </li>
                    <li>
                      <b>Fairness:</b> Bais is an inherent risk that AI carries.
                      AI systems must not discriminate or favour certain groups
                      or individuals based on factors like race, gender, age, or
                      religion. The presence of bias and misinformation likewise
                      can affect the enterprise negatively. Biassed hiring
                      systems, discriminatory credit scoring, or censorship on
                      social media platforms are examples of such risks. This,
                      if overlooked, can stain the consumer and provider
                      relationship - thereby affecting the brand image.
                    </li>
                    <li>
                      <b>Accountability:</b> AI systems should be designed in
                      such a way as to explain their actions and decisions. It
                      should be equipped with mechanisms and filters that can be
                      used by AI systems to be held responsible for their
                      outcomes. We can see this in the form of a recommender
                      system that justifies its suggestions, or a facial
                      recognition system reporting its accuracy. In AI, just
                      like any other impactful technology, accountability is
                      essential.
                    </li>
                    <li>
                      <b>Transparency:</b> AI systems must be understandable and
                      interpretable by humans, both in terms of their design and
                      behaviour. This not only allows developers to fine-tune
                      the model and run assessment tests but also account for
                      errors better while training the AI model. Optimised
                      Transparent machine learning models, interpretable natural
                      language processing systems, and explainable computer
                      vision models are all examples of AI that contribute to
                      transparency.
                    </li>
                  </ul>
                </div>

                <div>
                  <div>
                    <h1 className="text-4xl font-bold mb-8 ">
                      Solutions and Procedures for Reliable and Robust AI
                    </h1>
                  </div>
                  <img src={image2} alt="graph-economic-impact" />
                  <p className="mt-4 mb-5">
                    We addressed the common challenges while developing an AI
                    model in the previous section. We also went through how a
                    developer could tackle those challenges.
                  </p>
                  <p className="mb-5">
                    However, every enterprise has different scale, economies and
                    complexities in terms of its system architecture.
                  </p>
                  <p className="mb-5">
                    Thus, to ensure consistent reliability and robustness in AI,
                    various standard methods and best practices have been
                    proposed as follows:
                  </p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      <b>Testing:</b> AI systems undergo testing to check
                      functionality and performance against predefined criteria.
                      This standard procedure majorly includes unit testing,
                      integration testing, system testing, and acceptance
                      testing, conducted in different environments.
                    </li>
                    <li className="mb-3">
                      <b>Verification:</b> Verification is built on top of
                      testing. It is used to prove that an AI system meets
                      formal specifications and demands. This is done by
                      verifying how closely the AI system relies on formal
                      methods, model checking, theorem proving, or static
                      analysis.
                    </li>
                    <li className="mb-3">
                      <b>Validation:</b> after testing and certification comes
                      validation. Validation demonstrates that an AI system
                      meets its intended purpose and user needs, typically
                      through empirical evaluation, RLHF, user review, testing,
                      or external studies and research.
                    </li>
                    <li className="mb-3">
                      <b>Monitoring:</b> Monitoring observes and measures AI
                      system behaviour over time, and accesses the performance
                      during operation and deployment, helping detect and
                      diagnose anomalies, errors, or deviations.
                    </li>
                    <li className="mb-3">
                      <b>Debugging:</b> Debugging is the process that includes
                      identifying and fixing problems or defects in AI systems,
                      and enhancing code and data quality.
                    </li>
                  </ul>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      AI and promising future with AIProff
                    </h1>
                  </div>
                  <div>
                    <img src={image7} alt="" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                    AI is a promising piece of innovation, but it has its
                    caveats. For enterprises of today and the future, it is
                    important to embrace this new technology with caution.
                  </p>
                  <p>
                    As you can see from the previous sections, a lot of focus
                    was made on designing a reliable and robust AI design. Poor
                    planning of AI systems can lead to many issues - reliable AI
                    won’t always be reliable, and robust AI won't always be
                    robust.
                  </p>
                  <p>
                    Every enterprise has its own needs and scale, which makes it
                    difficult to create a consistent AI application.
                  </p>
                  <p>
                    Thus, it all comes down to human expertise who design,
                    develop and implement these AI systems that align with the
                    needs of the enterprise. As demand for AI solutions grows,
                    the need for reliable and robust AI platforms to support
                    enterprise-scale development and deployment becomes
                    paramount.
                  </p>
                  <p>Here's where AiProff comes to your service.</p>
                  <p>
                    AIProff is a leading provider and developer of AI/ML-based
                    applications that empower enterprises to create, manage, and
                    optimise AI applications with confidence and ease.
                  </p>
                  <p>
                    AIProff's expertise and services span the entire AI
                    lifecycle, from data ingestion and preparation to model
                    building and training, and ultimately deployment and
                    monitoring.
                  </p>
                  <p>We offer solutions in:</p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      <b>Automated Testing:</b> Verify functionality,
                      performance, and accuracy of AI models.
                    </li>
                    <li className="mb-3">
                      <b>Explainable AI:</b> Generate human-readable
                      explanations for AI model decisions, enhancing
                      transparency.
                    </li>
                    <li className="mb-3">
                      <b>Adversarial Robustness:</b> Protect AI models from
                      malicious attacks, ensuring security and integrity.
                    </li>
                    <li className="mb-3">
                      <b>Fairness and Bias Detection:</b> Measure and mitigate
                      potential biases and unfairness in AI model outcomes,
                      promoting fairness and ethics.
                    </li>
                  </ul>
                  <p>and many more</p>
                  <p>
                    In the evolving landscape of AI, AIProff is here to help you
                    achieve your AI goals and overcome challenges, ultimately
                    creating reliable and robust AI systems for the benefit of
                    enterprises and society.
                  </p>
                  <p>
                    If you're interested in learning more about how AiProff can
                    support your AI initiatives, visit our website or reach out
                    to us today.{' '}
                  </p>
                  <p>
                    We welcome new partners and collaborators who share our
                    vision of a more reliable and robust AI future.
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
                    to="https://ingestionpeekai.s3.amazonaws.com/Reliable+%26+Robust+ai.pdf"
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
                  Introduction: Reliable and Robust AI
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
                  to="https://ingestionpeekai.s3.amazonaws.com/Reliable+%26+Robust+ai.pdf"
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
                  to="https://ingestionpeekai.s3.amazonaws.com/Reliable+%26+Robust+ai.pdf"
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
                  Introduction: Reliable and Robust AI
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
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer ">
                        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                        Linkedin
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
                        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                        Facebook
                      </div>
                      <div className="flex items-center py-1 hover:bg-blue-100 cursor-pointer">
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
                  to="https://ingestionpeekai.s3.amazonaws.com/Reliable+%26+Robust+ai.pdf"
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
                  to={'/forecasting-using-ai'}
                  className="mx-1 text-blue-600 no-underline cursor-pointer"
                >
          <div className="card hover:bg-white p-5 hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={card_image1}
              className="rounded-t"
              alt="Quantum Article"
            />
            <div className="p-4">
              <p>Sept 22, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Introduction: When AI starts to predict Future
              </p>
              <p>Forecasting is the art and science of predicting future events or outcomes based on past and present data.</p>

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

export default RealaibleAndRodbustAi;
