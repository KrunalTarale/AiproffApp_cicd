import Navbar from '../Navbar/Navbar';
import Carousel from '../Carousel/Carousel';
import Footer from '../Foot/Foot';
import image from '../assets/Article1/logo.png';
import Team from '../Team/Team';
import './About.css';
const About = () => {
  return (
    <div className="About">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-col justify-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-2xl max-w-xl mx-auto space-y-12  p-8 my-20">
        <h1 className="lg:text-5xl text-4xl font-bold">About us</h1>
        <div className="lg:text-xl text-lg space-y-12">
          <p>
            Welcome to AiProff.ai ! We specialize in Natural Language
            Processing, Computer Vision, and Time Series Analysis. Our team is
            passionate about the latest developments in Artificial
            Intelligence/Machine Learning and we are excited to share our
            expertise with you.
          </p>
          {/* <div className="flex items-center justify-center">
            <img src={image} className="max-h-[25rem]" />
          </div> */}

          <p>
            At our core, we are a team of dedicated professionals witch
            extensive experience in machine learning, artificial intelligence,
            and data science. Our focus is on developing cutting-edge solutions
            as Minimum Viable Products for Enterprises and Academic
            Institutions. Hence, imparting AI/ML Training is an integral part of
            our offerings.
          </p>
          <p>
            We don’t talk about just the algorithms and code – rather we present
            working solutions for Individuals and Business alike. We believe in
            transferring the power of ML to the end users to make them better
            educated and derive value from their AI/ML investments.
          </p>
          <p>
            Our mission is to help businesses of all sizes harness the power of
            machine learning to drive growth, efficiency, and innovation. We
            believe that the future of business is in the hands of those who can
            harness the power of data to make informed decisions, and we are
            committed to providing our clients with the tools and expertise they
            need to succeed.
          </p>
          <p>
            Whether you are looking to improve your customer experience,
            optimize your operations, or develop new products and services, we
            have the expertise and technology to help you achieve your goals.
            Our team of data scientists, machine learning engineers, and
            software developers will work closely with you to develop a custom
            solution tailored to your specific needs.
          </p>
          <p>
            At our start-up, we pride ourselves on our commitment to innovation,
            excellence, and customer satisfaction. We are dedicated to providing
            our clients with the highest quality solutions and services, and we
            are always looking for new ways to push the boundaries of what is
            possible in machine learning.
          </p>
          <p>
            We are a passionate group of Tech Geeks who strive hard to curate
            and build solid case studies catering to specific use case of
            Applied AI/ML.
          </p>
          <p>
            We just don’t talk about the algorithms and code – rather we present
            working solutions for Individuals and Business alike.
          </p>
          <p>
            Applied AI/ML including ML Ops, ML Engineering, and all aspects of
            AI/ML is our forte. View the demos to know more!
          </p>
          <p>
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
