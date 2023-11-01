import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import Team from '../Team/Team';
import ReactGA from 'react-ga';
import './About.css';
import { Helmet } from 'react-helmet';
const About = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="About">

              <Helmet>
                <meta charSet='utf-8'/>
                <title>About Us - Our Mission, Services and Expertise in Applied AI/ML </title>
                <meta name='description' content='At AiProff, we specialise in Applied AI/ML, NLP, Computer Vision, and Time Series Analysis. Our mission is to bridge the gap between expertise and innovation through applied AI. We are a dedicated team of ML and data science professionals, delivering cutting-edge solutions to enterprises and academic institutions.' />
                <meta name='keywords' content='Applied AI, ML, NLP, Computer Vision, AiProff'/>
                <link href="https://www.aiproff.ai/about" rel="canonical" />
              </Helmet>

      <div>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xl mx-auto space-y-12  p-8 my-20">
        <h1 className="lg:text-5xl text-4xl font-bold">About us</h1>
        <div className="lg:text-xl text-lg">
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            Welcome to AiProff.ai ! We specialize in Natural Language
            Processing, Computer Vision, and Time Series Analysis. Our team is
            passionate about the latest developments in Artificial
            Intelligence/Machine Learning and we are excited to share our
            expertise with you.
          </p>
          {/* <div className="flex items-center justify-center">
            <img src={image} className="max-h-[25rem]" />
          </div> */}

          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            At our core, we are a team of dedicated professionals witch
            extensive experience in machine learning, artificial intelligence,
            and data science. Our focus is on developing cutting-edge solutions
            as Minimum Viable Products for Enterprises and Academic
            Institutions. Hence, imparting AI/ML Training is an integral part of
            our offerings.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            We don’t talk about just the algorithms and code – rather we present
            working solutions for Individuals and Business alike. We believe in
            transferring the power of ML to the end users to make them better
            educated and derive value from their AI/ML investments.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            Our mission is to help businesses of all sizes harness the power of
            machine learning to drive growth, efficiency, and innovation. We
            believe that the future of business is in the hands of those who can
            harness the power of data to make informed decisions, and we are
            committed to providing our clients with the tools and expertise they
            need to succeed.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            Whether you are looking to improve your customer experience,
            optimize your operations, or develop new products and services, we
            have the expertise and technology to help you achieve your goals.
            Our team of data scientists, machine learning engineers, and
            software developers will work closely with you to develop a custom
            solution tailored to your specific needs.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            At our start-up, we pride ourselves on our commitment to innovation,
            excellence, and customer satisfaction. We are dedicated to providing
            our clients with the highest quality solutions and services, and we
            are always looking for new ways to push the boundaries of what is
            possible in machine learning.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            We are a passionate group of Tech Geeks who strive hard to curate
            and build solid case studies catering to specific use case of
            Applied AI/ML.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            We just don’t talk about the algorithms and code – rather we present
            working solutions for Individuals and Business alike.
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            Applied AI/ML including ML Ops, ML Engineering, and all aspects of
            AI/ML is our forte. View the demos to know more!
          </p>
          <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
            Thank you for considering AiProff.ai. We look forward to working
            with you!
          </p>
        </div>
        <Team/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
