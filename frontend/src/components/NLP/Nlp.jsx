import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Nlp.css';
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

import image1 from '../assets/Nlp_img/nlp_bannerrr.webp';
import image2 from '../assets/Nlp_img/nlp_img2.jpg';
import image3 from '../assets/Nlp_img/nlp_img3.jpg';
import image4 from '../assets/Nlp_img/nlp_img4.jpg';
import image5 from '../assets/Nlp_img/nlp_img5.jpg';
import image7 from '../assets/Article1/logo.png';

// Card images

import card_image1 from '../assets/forcastingAi/ForcastingusingAIr.webp';
import card_image2 from '../assets/Article1/Appliedair.webp';
import card_image3 from '../assets/ComputerVision/img1r.webp';

// Card images ends

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import Footer from '../Foot/Foot';

const Nlp = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const Title = 'Introduction to NLP: When AI talks';
  const navigate = useNavigate()

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
          article: 'NLP',
          title: 'Introduction to NLP: When AI talks',
          date: 'September 4, 2023',
          url: 'nlp',
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
    var url = 'https://www.aiproff.ai/nlp';
    var linkedinUrl =
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent(url);
    window.open(linkedinUrl, '_blank');
  }

  function shareOnTwitter() {
    // Replace 'your-twitter-share-url' with the URL you want to share on Twitter.
    var url = 'https://www.aiproff.ai/nlp';
    window.open(
      'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url),
      '_blank'
    );
  }

  //   function shareOnTwitter() {
  //     var url = 'https://www.aiproff.com/nlp';
  //     var text = 'Thank you for connecting with us';
  //     var twitterIntentURL = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(text);
  //     window.open(twitterIntentURL, '_blank');
  // }

  function shareOnFacebook() {
    // Replace 'your-facebook-share-url' with the URL you want to share on Facebook.
    var url = 'https://www.aiproff.ai/nlp';
    window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url),
      '_blank'
    );
  }

  function shareByEmail() {
    // Replace 'your-email-share-url' with the URL you want to share via email.
    var url = 'https://www.aiproff.ai/nlp';
    window.location.href = 'mailto:?body=' + encodeURIComponent(url);
  }

  return (
    <>
        <Helmet>
            <link href="https://www.aiproff.ai/introduction-to-nlp" rel="canonical" />
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
              {/* <h1 className="text-4xl md:text-5xl font-semibold mb-2 z-10 leading-relaxed banner_color">
                Introduction to NLP: When AI talks
              </h1> */}
              <div className="w-full flex justify-start items-center">
                {/* <p className="mt-2 banner_color">September 4, 2023</p> */}
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
              Introduction to NLP: When AI talks
            </h1>
            <div className="md:flex md:justify-between md:w-4/5 space-y-8 md:space-y-0">
              <div className="underline underline-offset-4">
                <Link to="/">By AiProff</Link>
              </div>
              <div>
                {isAudioPlayerVisible ? (
                  <AudioPlayer
                    audio="/audio_files/NLP.mp3"
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
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
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
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
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
                      Introduction to NLP: When AI talks
                    </h1>
                  </div>
                  <div>
                    <p className="mb-5">
                      The field of Artificial intelligence is exciting. Under
                      this discipline of Technology, machines can talk, machines
                      can see, and machines can think. Computer Vision allows
                      machines to see. Conversational AI systems allow machines
                      to talk. Deep learning allows machines to mimic human
                      thinking.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      {' '}
                      Natural Language Processing (NLP) is an interdisciplinary
                      field that combines linguistics, computer science, and
                      artificial intelligence. It aims to enable computers to
                      understand and communicate with humans using natural
                      language. NLP involves developing algorithms and systems
                      that can process and analyse large volumes of language
                      data, and use it to interact with humans.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      Interestingly, NLP began in the 1940s after World War II
                      when people recognized the importance of translating
                      languages using a machine. They wanted a machine that
                      could do this automatically, and thus aid in communicating
                      effectively without physical and language barriers. The
                      1960s saw some early forms of NLP, which included SHRDLU -
                      a natural language system that worked with restricted
                      vocabularies.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      Then, after nearly 60 years, innovations under NLP saw its
                      biggest boost yet – thanks to Transformers.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      In 2017, Google released its famous "Attention is All You
                      Need" research paper, which introduced a new network
                      architecture called the Transformer. The Transformer was a
                      breakthrough in Natural Language Processing (NLP) because
                      it relied only on attention mechanisms. This enabled the
                      model to pay attention to different parts of the input
                      sequence when generating an output.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      Moreover, Transformers did not use recurrence or
                      convolutions – which are two different types of neural
                      networks used in deep learning. This allowed these
                      Transformer models to be superior in quality, as well as
                      fast to train.
                    </p>
                  </div>
                  <div>
                    {' '}
                    <p className="mb-5">
                      But how are NLP used in modern-day enterprises? What are
                      the requirements to build your own NLP models? And
                      finally, what are things we should keep in mind before
                      using these NLP models in our organisations.?
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      NLP Techniques and Methods: How does AI understand human
                      languages and responses
                    </h1>
                  </div>
                  <div>
                    <img src={image2} alt="graph-economic-impact" />
                    <p className="text-xs ">
                      The interest in AI and NLP are growing at an exponential
                      rate rate. Source:{' '}
                      <a
                        href="https://dzone.com/articles/natural-language-processing-projects-amp-startups"
                        target="_blank"
                        className="links"
                      >
                        DZone Big Data
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space-y-8 ">
                  <p>
                    Natural Language Processing (NLP) uses a variety of
                    techniques and methods to process and analyse human
                    language. However, the whole process of building an NLP
                    model can be classified as the culmination of three
                    processes - computational linguistics, deep learning, and
                    (lots of) statistics.
                  </p>
                  <p>
                    Computational linguistics refers to combining natural
                    language and computational approaches to linguistic
                    questions. Deep learning is a subfield of artificial
                    intelligence that uses neural networks to learn from large
                    amounts of data and make predictions based on these data.
                    Statistics is also used in NLP to refine the training data,
                    develop algorithms, and build models on top of these
                    training data and algorithms.
                  </p>
                  <p>
                    Over recent years, the field of NLP has seen a wide range of
                    applications. Some prominent applications of NLP used by
                    modern enterprises are listed below:
                  </p>
                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      {' '}
                      <b> Chatbots and Virtual Assistants: </b> NLP is being
                      used to develop chatbots and virtual assistants like
                      ChatGPT and Amazon’s Alexa respectively. The understanding
                      of NLP allows these applications to interact with
                      customers, providing them with information and assistance
                      in a natural way that is understandable by humans.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Speech Recognition: </b> NLP often deals with the
                      tasks of converting spoken words into text. This
                      technology is used in applications such as text-to-speech,
                      automated call centres, and even voice-enabled
                      verification systems.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Email Filtering: </b> With the power of NLP, one can
                      teach a system to filter and categorise emails based on
                      their content. Moreover, by reading the content of emails,
                      these models can label the messages as well. This helps in
                      prioritising emails and reducing the time spent on email
                      management.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Language Translation: </b> This was the main
                      foundational reason for which NLP came into existence. NLP
                      translation software can be used to translate text from
                      one language to another. This technology is used in
                      applications such as Google Translate and other language
                      translation software.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Proofreading: </b> NLP leverages its language skills
                      to enhance grammar-checking software and autocorrect
                      functions. This technology is used in applications such as
                      Grammarly and other grammar-checking software, and
                      modern-day autocorrect apps.
                    </li>
                  </ul>

                  <p>
                    On the technical front, there are three steps taken to train
                    an NLP: data acquisition, data training, and data
                    fine-tuning. The model takes a text input (raw data) and
                    splits it into smaller units that the machine can
                    understand. The model then extracts useful information from
                    these units and applies machine learning algorithms to
                    process it. The machine repeats this process with some
                    adjustments to improve the output, and the machine learns
                    progressively.
                  </p>

                  <p>
                    Techniques such as Tokenization, Stemming, Lemmatization and
                    Sentiment Analysis are used to produce texts that are
                    comprehensible to humans.
                  </p>

                  <p>
                    Here are some of the well-known NLP models and frameworks:
                  </p>
                </div>

                <div>
                  <img src={image3} alt="graph-economic-impact" />
                  {/* <p className="text-xs ">
                    AI holds a promising future for economies of G20 countries.
                    Source: Accenture & Frontier Economics
                  </p> */}
                </div>
                <div>
                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      {' '}
                      <b> TensorFlow: </b> One of the most popular open-source
                      frameworks for NLP and machine learning is TensorFlow,
                      which was created by Google. TensorFlow is widely used for
                      NLP tasks and has a large community of developers.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> BERT: </b> BERT (Bidirectional Encoder Representations
                      from Transformers) is a pre-trained NLP model which is
                      also developed by Google. It can handle different tasks
                      such as identifying the sentiment, answering questions,
                      and named entity recognition.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> GPT-3: </b> GPT-3 (Generative Pre-trained Transformer
                      3) is a popular transformer-based NLP model developed by
                      OpenAI. It is capable of performing a wide range of NLP
                      tasks such as generating code, doing simple maths
                      calculations, and text generation.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> NLTK: </b> NLTK (Natural Language Toolkit) is a
                      popular open-source library for NLP in Python. It provides
                      a wide range of tools for analysis and text processing. It
                      supports various functionalities such as tokenization,
                      tagging, and semantic analysis.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Word2Vec: </b> Word2Vec is a neural network-based
                      model for word embedding developed by Google. It is widely
                      used for text classification, sentiment analysis, and
                      other NLP tasks
                    </li>
                  </ul>
                </div>

                <div>
                  <div id="nlp-benefits">
                    <h1 className="text-4xl font-bold  ">
                      NLP Benefits and Shortcomings: Misinformations and
                      Hallucinations
                    </h1>
                  </div>

                  <p className="mt-4 mb-5">
                    Natural language processing (NLP) is a rapidly growing field
                    in the AI industry. According to forecasts, the global NLP
                    market size will reach 43.9 billion U.S. dollars by 2025.
                    The reason for this growth is that NLP is becoming an
                    essential tool for analytics and knowledge creation in
                    various domains, as enterprises increasingly rely on big
                    data to gain insights and value.
                  </p>

                  <img src={image4} alt="" className="mb-5" />
                  <p>
                    2020 NLP survey. Source:{' '}
                    <a
                      href="https://www.prweb.com/releases/the-2020-nlp-industry-survey-finds-increasing-enterprise-investment-in-natural-language-processing-despite-pandemic-impacted-it-budgets-898607278.html"
                      target="_blank"
                      className="links"
                    >
                      {' '}
                      prweb.com{' '}
                    </a>
                  </p>
                  <p className="mt-5 mb-5">
                    The following four qualities of NLP make it a promising
                    technology for enterprises-
                  </p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3">
                      {' '}
                      <b> NLP can Perform large-scale analysis: </b> NLP systems
                      can process and interpret large amounts of data in a very
                      short time. They can discover patterns that are hard or
                      tedious for humans to find, allowing employees to boost
                      their productivity with NLP applications and collaborate
                      on a common objective. NLP is already applied to various
                      domains such as processing unstructured text data, social
                      media analytics, customer support tickets, online reviews,
                      and more.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Automate processes in real-time: </b> Machines can
                      automate tasks in a fast way, and AI can automate tasks in
                      a smart way. NLP tools would help machines to sort and
                      carry out operations on information with very little or no
                      human interaction. NLP tools, along with the supervision
                      of humans, can do tasks in a quick, efficient, and
                      accurate manner.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b>
                        {' '}
                        Searching and Querying huge corpus of unstructured data:{' '}
                      </b>{' '}
                      Generative AI is using NLP to make the task of querying
                      image data searching easier. This is useful in
                      institutions like healthcare and law, where NLP apps can
                      quickly and efficiently access the records that date back
                      to 20-30 years. Moreover, using NLP, you can not only
                      retrieve information from a huge sea of unstructured data,
                      but also run analysis over it to find key trends or
                      patterns.
                    </li>
                    <li className="mb-3">
                      {' '}
                      <b> Real time analysis from a large pool of data: </b> NLP
                      techniques can enable applications to analyse large
                      amounts of data in real time. For instance, MeetGeek and
                      Otter Ai are applications that can accurately capture and
                      summarise the key points of a meeting with multiple
                      participants. This can enhance the productivity of the
                      meeting by saving time and effort that would otherwise be
                      spent on manual transcription and summarization.
                    </li>
                  </ul>

                  <p className="mt-5">
                    NLP, thus, has limitless potential for data-driven
                    industries. This innovative technology can revolutionise any
                    field that involves data and analysis.
                  </p>

                  <p className="mb-5">
                    However, no matter how revolutionary this field of AI is, it
                    is not devoid of flaws. Just like any other AI application,
                    NLP apps also have inherent drawbacks – hallucination and
                    misinformation.
                  </p>

                  <p className="mb-5">
                    One of the ethical challenges of AI systems is that they can
                    produce false or harmful information or stereotypes. This
                    can occur when the AI model creates text that is not
                    grounded in facts, but on its own prejudices, lack of
                    real-world knowledge, or flaws of the data it was trained
                    on.{' '}
                  </p>

                  <p className="mb-5">
                    These are known as hallucinations, and they can have severe
                    negative consequences for society, especially when the
                    language model is confident in its output, which can deceive
                    or misinform people on a large scale.
                  </p>

                  <p className="mb-5">
                    {' '}
                    <b> Misinformation,</b> which is caused as an aftermath of
                    hallucination, can potentially perpetuate harmful
                    stereotypes or misinformation, making AI systems ethically
                    questionable.{' '}
                  </p>

                  <p className="mb-5">
                    {' '}
                    <b> Hallucinations</b> can potentially cause society
                    widespread panic and misinformation on a global scale, as
                    language models are confident in their answers, which can
                    lead to serious consequences.
                  </p>

                  <p>
                    Thus, improper implementation of NLP applications in your
                    enterprise could lead to heavy costs if they behave
                    erroneously. This apparent risk only increases in magnitude
                    as the scale of the enterprise increases.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                      Solutions & AiProff Assistance
                    </h1>
                  </div>
                  <div>{/* <img src={image5} alt="" /> */}</div>
                </div>
                <div className="space-y-5">
                  <p>
                    The good news is, there are many ways through which you can
                    overcome these shortcomings.
                  </p>
                  <p>
                    First, you can improve the quality and diversity of your
                    training data. This will help your model avoid hallucination
                    and misinformation, as it will have more and varied data to
                    learn from.
                  </p>
                  <p>
                    Moreover, identifying and reducing the inherent biases in
                    the data also makes these models less susceptible towards
                    generating erroneous responses.
                  </p>
                  <p>
                    Second, you can use better regularisation methods.
                    Regularisation methods are methods that help prevent
                    overfitting and other issues in the AI model that could lead
                    to hallucinations.
                  </p>
                  <p>
                    Additionally, employing adversarial training and
                    reinforcement learning also improves the robustness of NLP
                    models and reduces the risk of hallucinations.
                  </p>
                  <p>
                    Third, you can apply more constraints on the model's output,
                    such as limiting the length of responses or limiting the
                    scope of facts. This will help your model generate more
                    relevant and accurate responses.
                  </p>
                  <p>
                    As we can see, AI can offer many benefits for your
                    organisation. However, the correct implementation of AI in
                    your organisation is important.
                  </p>
                  <p>
                    It may seem easy to use AI-based solutions for various
                    tasks, but the reality is that NLP apps, like any other deep
                    learning applications, are not always reliable. The reason
                    for this is that the more data and complexity you have, the
                    more unpredictable the deep learning architecture becomes.
                  </p>
                  <div>
                    <img src={image5}></img>
                    <p className="text-xs ">
                      The Diversity in AI and NLP, and interest in this field
                      over the decade, has been growing. Source:{' '}
                      <a
                        href="https://www.kbvresearch.com/natural-language-processing-market/"
                        target="_blank"
                        className="links"
                      >
                        {' '}
                        kbvresearch.com{' '}
                      </a>
                    </p>
                  </div>

                  <p>
                    Right now, NLP is one of the most important and influential
                    fields in the age of AI. However, NLP also faces many
                    limitations and challenges that need to be addressed.{' '}
                  </p>
                  <p>
                    To make the best use of NLP, one needs to understand how the
                    NLP model works and design the optimal way to implement it
                    in the organisation.{' '}
                  </p>
                </div>

                {/* <div>
                  <h1 className="text-4xl font-bold ">
                    How AI works, a brief overview
                  </h1>
                </div> */}
                {/* <div className="space-y-8">
                  <p>
                    AI is not truly intelligent, but rather imitates human
                    intelligence. This is because AI learns from a specific data
                    set, and its knowledge is bounded by the data that it is
                    exposed to during its training. They do not possess any
                    intelligence of their own.
                  </p>
                  <p>
                    Therefore, AI does not have reasoning abilities; it cannot
                    distinguish between right and wrong, true and false, or
                    biased and unbiased facts. For a machine, all information –
                    regardless of its quality – is simply ‘data’ from the
                    viewpoint of AI.
                  </p>
                  <p>
                    This leads to another problem of AI – it can make biassed
                    conclusions. This depends largely on the quality of the data
                    that is used to train the AI system. If the data is skewed
                    or incomplete, or if the algorithm that runs the AI system
                    has some errors, it could lead to unwanted outcomes.
                  </p>
                  <p>
                    These 'undesirable' outputs can have serious implications
                    for enterprises that rely on large-scale data. For example,
                    CNET, a well-known news outlet, experimented with AI to
                    produce web articles for its website. However, to their
                    disappointment, the news-outlet found errors in more than
                    <a
                      href=""
                      className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 "
                    >
                      half of its AI-written stories
                    </a>
                    .
                  </p>
                  <p>
                    This undesirable outcome is the result of bad AI deployment
                    and insufficient consideration towards the risks associated
                    with AI
                  </p>
                  <p>
                    Therefore, it is essential for organisations to exercise
                    caution when integrating AI into one's organisation or
                    workflow.
                  </p>
                </div> */}
                {/* <div>
                  <h1 className="text-4xl font-bold">
                    Predict with Confidence with AiProff
                  </h1>
                </div> */}
                <div>
                  <img src={image7} />
                </div>
                <div className="space-y-8">
                  <p>
                    This is where AiProff can assist you. AiProff is a leading
                    company in the AI domain that enables you to discover the
                    endless opportunities that AI provides. We are a group of
                    skilled experts with a wealth of knowledge and experience in
                    machine learning, artificial intelligence, and data science.
                  </p>
                  <p>
                    We not only know how to build machine learning models but
                    also how to detect and prevent vulnerabilities and biases
                    that can lead to erroneous or harmful outcomes.
                  </p>
                  <p>
                    We excel at creating state-of-the-art solutions as Minimum
                    Viable Products for Enterprises and Academic Institutions to
                    lower the entry barrier – using cutting-edge AI/ML solutions
                    – and expedite time to market.
                  </p>
                  <p>
                    <b>
                      Interested in making your revolutionary products/services
                      using AI? Contact us:{' '}
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
                    to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
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
                  Introduction to NLP: When AI talks
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
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
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
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP.pdf"
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
                  Introduction to NLP: When AI talks
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
                <div className="flex flex-col items-center text-center hover:text-blue-500">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/NLP+updated.pdf"
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
                  to={'/applied-ai'}
                  className="mx-1 text-blue-600 no-underline cursor-pointer"
                >
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300 m-3 card_width">
            <img
              src={card_image2}
              className="rounded-t"
              alt="Quantum Article"
            />
            <div className="p-4">
              <p>Sept 23, 2023</p>
              <p className="text-gray-700 font-bold hover:underline underline-offset-4">
                Applied AI: When AI solves real world problems
              </p>
              <p>Applied AI: When AI solves real world problems Artificial Intelligence is a promising technological</p>
             
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

export default Nlp;
