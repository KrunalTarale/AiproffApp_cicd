import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./ComputerVision.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faPrint,
  faDownload,
  faSave,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import image1 from "../assets/ComputerVision/img1.jpg";
import image2 from "../assets/ComputerVision/img2.jpg";
import image3 from "../assets/ComputerVision/img3.jpg";
import image4 from "../assets/ComputerVision/img4.jpg";
import image7 from "../assets/Article1/logo.png";
import card1 from "../assets/Article1/card1.png";

import AudioPlayer from "../AudioPlayer/AudioPlayer";
import Footer from "../Foot/Foot";

const ComputerVision = () => {
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
        event.target.closest(".share-icon") === null &&
        event.target.closest(".dropdown") === null
      ) {
        setDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the target of the click event is not the dropdown or the share icon
      if (
        progressdropdownVisible &&
        event.target.closest(".share-icon-progress") === null &&
        event.target.closest(".progress-dropdown") === null
      ) {
        setprogressDropdownVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);

  const toggleAudioPlayerVisibility = () => {
    setIsAudioPlayerVisible(!isAudioPlayerVisible);
  };

  // Saving the article code

  const [message, setmassage] = useState("");
  const handleSaveArticle = async () => {
    const auth = localStorage.getItem("user");
    const user = JSON.parse(auth);

    if (user) {
      let res = await fetch("/update_article", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          id: user._id,
          article: "Computer Vision",
          title: "Introduction to Computer Vision: When Machines Start to See",
          date : "September 4, 2023",
          url : "Computer_Vision"
        }),
      });
      const data = await res.json();
      console.log(data);
      setmassage(data.message);

      setTimeout(() => {
        setmassage("");
      }, 2000);
    } else {
      setmassage("Please login first");
      setTimeout(() => {
        setmassage("");
      }, 2000);
    }
  };

  // links
  function shareOnLinkedIn() {
    var url = 'https://www.aiproff.com/Computer_Vision';
    var linkedinUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(url);
    window.open(linkedinUrl, '_blank');
  }
  
  function shareOnTwitter() {
    // Replace 'your-twitter-share-url' with the URL you want to share on Twitter.
    var url = 'https://www.aiproff.com/Computer_Vision';
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url), '_blank');
  }
  
  function shareOnFacebook() {
    // Replace 'your-facebook-share-url' with the URL you want to share on Facebook.
    var url = 'https://www.aiproff.com/Computer_Vision';
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
  }
  
  function shareByEmail() {
    // Replace 'your-email-share-url' with the URL you want to share via email.
    var url = 'https://www.aiproff.com/Computer_Vision';
    window.location.href = 'mailto:?body=' + encodeURIComponent(url);
  }
  

  return (
    <>
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
              {/* <h1 className="text-4xl md:text-5xl font-semibold mb-2 z-10 text-white leading-relaxed">
                Applied AI: When AI solves real world problems
              </h1> */}
              <div className="w-full flex justify-start items-center">
                {/* <p className="mt-2 text-slate-100">September 4, 2023</p> */}
              </div>
            </div>
          </div>

          {message && (
              <div className="px-3 py-3 leading-normal text-blue-700 bg-blue-100 rounded-lg massege_alrt" role="alert">
              <p>{message}</p>
            </div>
      )}

          <div className="mx-auto lg:max-w-7xl flex flex-col justify-center p-16 article_padding">
          <h1 className="text-4xl font-bold mb-6 upper_heading">
                    Introduction to Computer Vision: When Machines Start to See
          </h1>
            <div className="md:flex md:justify-between md:w-4/5 space-y-8 md:space-y-0">
              <div className="underline underline-offset-4">
                <Link to="/">By AiProff</Link>
              </div>
              <div>
                {isAudioPlayerVisible ? (
                  <AudioPlayer
                    audio="/audiofile.mp3"
                    onClose={toggleAudioPlayerVisibility}
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

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className="hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/cv.pdf"
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
                    Introduction to Computer Vision: When Machines Start to See
                    </h1>
                  </div>
                  <div>
                    <p className="mb-5">
                    "A computer deserves to be called intelligent if it could deceive a human into believing that it was human.” – Alan Turing. 
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                      {" "}
                      The quest for intelligence has been going on for ages, and the question of ‘whether humans can think’ led us to many pursuits that culminated finally at a point where we made machines that can ‘mimic’ human thinking. This is Artificial Intelligence. 
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                    But it is its subfield computer vision that gave these machines the power to ‘see’ and comprehend their surroundings.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                    Computer vision is a subfield of artificial intelligence that focuses on making computers that can identify and understand images and videos.  The goal of any computer vision application is to replicate the human visual capabilities and try to make inferences from the visual information. 
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                    While the starting point of computer vision isn't clearly known, many believe that it started long back in the 1950s. In 1957, the first digital image scanner was invented by Russell Kirsch and his team at the US National Bureau of Standards. They used a rotating drum to scan images and convert them into digital signals. 
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                    Since then, there has been an introduction and acceleration in deep learning techniques. This allowed computer vision to become a rising interest that is backing many modern innovations and solutions.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                    And that kicked off the field of computer vision that gained traction in the 2000s. The market of global computer vision was even valued at USD 11.7 billion in 2021 – and the interest in the field is only going up. The global Computer Vision market is expected to reach USD 21.3 billion by 2030 according to a report by <a href="https://www.bing.com/search?q=The+global+Computer+Vision+market+is+expected+to+reach+USD+21.3+billion+by+2030&cvid=2145a939394b43fdb27f98b3b693c16c&aqs=edge..69i57j69i59.1449j0j4&FORM=ANAB01&PC=U531" target="_blank" className="links"> Spherical Insight </a>.
                    </p>
                  </div>
                  <div>
                    {" "}
                    <p className="mb-5">
                    But what is the state of computer vision currently? What are the promising insights about this field that you need to know?
                    </p>
                  </div>
                </div>

                <div className="space-y-8 ">
                <div>
                    <h1 className="text-4xl font-bold extra_space">
                    How is Computer vision achieved: Applications and Methods 
                    </h1>
                  </div>
                  <div>
                    <img src={image2} alt="" />
                  </div>
                  <p>
                  The earliest applications of computer vision were mostly devoted to creating algorithms that could identify plane shapes and edges in 2D pictures. This began in the 1960s when Larry Roberts described the process of deriving 3D information about solid objects from 2D photographs. Later in 1979, Dr. Kunihiko Fukushima proposed <a href="https://search.ieice.org/bin/summary.php?id=j62-a_10_658" target="_blank" className="links"> Neocognitron </a> – a revolutionary hierarchical multilayered neural network that was capable of robust visual pattern recognition that could detect basic shapes in an image. 
                  </p>
                  <p>
                  This led to the development of an entirely new field of AI – Computer Vision.
                  </p>
                  <p>
                  It was, however, not until the 2000s when computer vision technology advanced rapidly. The point of rapid development in computer vision was in the year 2001 when the first real-time face recognition video application was developed.  This was achieved using the <a href="https://ieeexplore.ieee.org/document/990517" target="_blank" className="links"> Viola-Jones object detection framework </a> for faces, which was later launched as an application called AdaBoost – the first real-time frontal-view face detector. 
                  </p>
                  <p>
                  Today, Computer Vision powered apps are used in wide range of applications. Content organisation, facial recognition, automatic checkout, spotting defects in manufacturing, detecting early signs of plant disease in agriculture, and many more. 
                  </p>
                </div>

                <div>

                <div>
                  </div>
                  <img src={image3} alt="graph-economic-impact" />
                  <p className="mt-4 mb-5">
                  The process of Computer Vision involves acquiring and processing data from visual media (images and videos ) and converting them into machine-understandable information. 
                  </p>
                  <p className="mb-5">
                  The basic functions of computer vision include the following:
                  </p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3"><b>Image Classification:</b> This involves categorising images into predefined classes or categories and assigning a label to the image based on its content. For example, an image classification model can recognize whether an image contains a cat, a dog, a car, or a person. </li>
                    <li className="mb-3"><b>Object Detection:</b> This involves identifying and localising objects within an image or video. It is used so that the computer can ‘see’ the environment (or the visual media) and locate instances of visual objects (say such as humans, animals, cars, or buildings</li>
                    <li className="mb-3"><b>Semantic Segmentation:</b> This involves dividing an image into multiple segments and assigning each segment a label based on its visual content. Usually, it is the task that assigns a class label to each pixel in an image. For example, in an image of a street scene, semantic segmentation can identify pixels that belong to cars, pedestrians, roads, buildings, etc.</li>
                    <li className="mb-3"><b>Instance Segmentation:</b> This involves identifying and localising the above instance of an object within an image or video. This is different from object detection, as in this the aim is to ‘differentiate’ various different segments of the visual content. For example, in an image of a crowd of people, instance segmentation would not only label each pixel as a person or background but also assign a unique ID to each identified person in the image – essentially differentiating each instance. </li>
                  </ul>

                  <p className="mb-5">
                  In recent years, Modern Computer Vision applications have used deep learning algorithms to accurately identify and classify objects from visual media. Deep learning is used in all of the above methods, where an AI is used to process and fine-tune computer vision prediction.
                  </p>
                  <p className="mb-5">
                  Thus, the infusion of AI in computer vision has made it more reliable and promising. Machine learning, which is the part of AI, has been at the forefront of enabling computer vision
                  </p>
                  <p className="mb-5">
                  With the help of AI, many enterprises are using computer vision to leverage its potential, such as: helping retailers monitor inventory, preventing theft, personalising recommendations systems for customers, and more. Moreover, computer vision has helped healthcare providers diagnose diseases, monitor patients, and enhance telemedicine. 
                  </p>
                  <p className="mb-5">
                  But how Reliable and Robust is Computer Vision? 
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold  ">
                    What does the future hold: Predicting with Confidence with AiProff
                    </h1>
                  </div>
                  <div>
                    <img src={image4} alt="" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                  The interest in Computer Vision is growing every year, and it is projected to be around 24 Billion when in 2027. Source: verifiedmarketresearch.com
                  </p>
                  <p>
                  The range of practical applications for computer vision technology makes it a central piece of innovation for many technology-based enterprises. However, amidst the growing numbers and growing interest, the rate of growth in this field hasn’t shown much positive results.
                  </p>
                  <p>
                  Computer vision, though rapidly evolving, is facing several challenges that make it harder to implement and pose a barrier to continual growth and success. Here are some of the challenges you might have to face in computer vision:
                  </p>

                  <ul className="list-disc ml-5 mb-5">
                    <li className="mb-3"><b>Inadequate hardware:</b> Implementing computer vision requires powerful hardware. These include components such as processors, memory chips, graphics cards and cameras. These components affect the performance, accuracy, and efficiency of computer vision algorithms. Thus, inadequate hardware can limit the amount of data that can be processed, the complexity of the models that can be trained, and the speed of the inference that can be done.</li>
                    <li className="mb-3"><b>Poor data quality:</b> Collecting relevant and sufficient data can be challenging, and poor data quality can lead to a lack of training data for computer vision systems. Poor data quality can result from various factors, such as noise, blur, occlusion, distortion, illumination, or annotation errors. These factors can affect the performance and accuracy of computer vision models, leading to undesirable outcomes or failures. </li>
                    <li className="mb-3"><b>Weak planning for model development:</b> Developing computer vision models requires careful planning, and weak planning can lead to poor performance and inaccurate results. This means, that having a lack of clear objectives, requirements, and evaluation criteria could affect the computer vision models negatively – leading to poor performance, inefficiency, and wasted resources. To overcome this challenge, computer vision practitioners need to follow a systematic and rigorous process of problem definition, data collection, model selection, training, testing, and deployment.</li>
                    <li className="mb-3"><b>Lack of annotated data:</b> Gathering labelled data (or data in general) for computer vision systems can be challenging. Annotated data is data that has been labelled with some information that can help a computer vision model learn from it. However, annotating data is a time-consuming and expensive process that requires human experts or crowdsourcing platforms, and a lack of annotated data can lead to poor performance and inaccurate results.</li>
                    <li className="mb-3"><b>Lack of experienced professionals:</b> Humans are the weakest link in the security chain, but the necessary component in any architecture. The complexity and diversity of computer vision problems requires a combination of mathematical, algorithmic and domain-specific knowledge. Moreover, there has been a rapid pace of innovation and research in computer vision, which makes it hard for enterprises to keep up with the latest developments and best practices. Developing and implementing computer vision systems, thus, requires skilled professionals – a lack of which can have serious consequences for businesses if overlooked.</li>
                  </ul>
                  <p>However, this field of Computer vision is evolving rapidly.</p>
                  <p>On the infrastructure front, faster, cheaper, and more efficient edge computing storage has given computer vision a boost and better performance. Improved hardware, on the other hand, has made the implementation of computer vision applications more efficient and cost-friendly. </p>
                  <p>Moreover,  modern enterprises are making a shift towards data-centric computer vision, where the primary emphasis is laid on collecting and processing high-quality data – instead of using algorithms of unprocessed and unlabeled datasets. Furthermore, advancements in the field of Natural Language Processing have also boosted the capabilities of computer vision applications, as it is being integrated with computer vision to enable machines to understand and respond to human language</p>
                  <p>The adoption of computer vision technology is increasing across various industries – including retail,  healthcare and self-driving cars.</p>
                  <p>Overall, the trends and interests in computer vision technology will have a significant impact on businesses and organisations of tomorrow, in the coming years.</p>
                  <p>But to really make a mark with your Computer Vision applications, one needs to understand how to correctly implement computer vision models in their enterprise. Optimisation of computer vision models, using reliable and robust AI, differs for each enterprise – depending on the scale and needs of the organisation.</p>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <img src={image7} alt="" />
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                  This is where AiProff can assist you. We are a group of skilled experts with a wealth of knowledge and experience in machine learning, artificial intelligence, and data science. 
                  </p>
                  <p>
                  Our expertise encompasses not only the development of machine learning models but also the identification and mitigation of vulnerabilities and biases that can result in erroneous or harmful outcomes. 
                  </p>
                  <p>  
                    We provide state-of-the-art solutions as Minimum Viable Products for Enterprises and Academic Institutions, leveraging cutting-edge AI/ML solutions to lower the entry barrier and expedite time to market.
                  </p>
                  <p>
                  <b>Interested in making your revolutionary products/services using AI? Contact us: </b>
                  </p>
                  <p>
                  Don’t let your critical and essential AI/ML workloads be at the mercy of naive assumptions.
                  </p>
                  <p>
                  Let’s secure and safeguard your innovation, and efficiencies to establish a robust and sustainable growth trajectory.
                  </p>
                </div>
              </div>

              <div
                className="ml-8 lg:ml-12 lg:w-3/12 border-y-2 border-black border-b-0 p-4 lg:pl-8 flex flex-col items-start space-y-8"
                style={{ height: "12rem" }}
              >
                <div className="text-2xl font-normal">Downloads</div>

                <div className="flex flex-row text-blue-600 hover:underline underline-offset-4 mb-4 space-x-2">
                  <Link
                    to="https://ingestionpeekai.s3.amazonaws.com/cv.pdf"
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
                Introduction to Computer Vision: When Machines Start to See
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {" "}
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

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPrint}
                    className=" hover:text-blue-500 cursor-pointer"
                  />
                  <span className="text-sm">Print</span>
                </div>

                <Link
                  to="https://ingestionpeekai.s3.amazonaws.com/cv.pdf"
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

                <div className="flex flex-col items-center text-center hover:text-blue-500 cursor-pointer" onClick={handleSaveArticle}>
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
                Introduction to Computer Vision: When Machines Start to See
                </h1>
              </div>

              <div className="flex space-x-4 ">
                <div className="relative">
                  {" "}
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
                  to="https://ingestionpeekai.s3.amazonaws.com/cv.pdf"
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
        <div className="flex lg:flex-row flex-col p-8 ">
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300">
            <img src={card1} className="rounded-t" alt="Quantum Article" />
            <div className="p-4">
              <p className="text-gray-700 font-bold mb-2">Article</p>
              <h1>
                <a className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 cursor-pointer">
                  Shaping the long race in quantum communication and quantum
                  sensing
                </a>
              </h1>
            </div>
          </div>
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300">
            <img src={card1} className="rounded-t" alt="Quantum Article" />
            <div className="p-4">
              <p className="text-gray-700 font-bold mb-2">Article</p>
              <h1>
                <a className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 cursor-pointer">
                  Shaping the long race in quantum communication and quantum
                  sensing
                </a>
              </h1>
            </div>
          </div>
          <div className="card hover:bg-white p-5   hover:shadow-lg transition-shadow duration-300">
            <img src={card1} className="rounded-t" alt="Quantum Article" />
            <div className="p-4">
              <p className="text-gray-700 font-bold mb-2">Article</p>
              <h1>
                <a className="mx-1 text-blue-600 no-underline hover:underline underline-offset-4 cursor-pointer">
                  Shaping the long race in quantum communication and quantum
                  sensing
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 pt-4 border-2">
        <Footer />
      </div>
    </>
  );
};

export default ComputerVision;
