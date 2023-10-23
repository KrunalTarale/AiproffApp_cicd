import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import 'font-awesome/css/font-awesome.min.css';
import './FAQ.css';
import ReactGA from 'react-ga';

const FaqItem = ({ isOpen, onClick, children }) => {
  return (
    <div
      className={`border rounded-lg mb-4  ${
        isOpen ? 'max-h-screen' : 'max-h-18'
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Faq = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col ">
      <div>
        <Navbar />
      </div>
      <div className=" mx-auto container_faq">
        <h1 className="text-4xl md:text-5xl  lg:text-6xl font-semibold mb-10 lg:mb-20 md:leading-normal">
          Frequently Asked Questions
        </h1>

        <FaqItem isOpen={openIndex === 0} onClick={() => handleToggle(0)}>
          <div className="p-4 cursor-pointer flex justify-between items-center">
            <h2 className="text-lg font-medium">
              How do I subscribe to AiProff.ai services?
            </h2>
            <i
              className={`text-xl fa ${
                openIndex === 0 ? 'fa-angle-up' : 'fa-angle-down'
              }`}
            ></i>
          </div>
          {openIndex === 0 && (
            <div className="p-4 bg-gray-100 text-gray-700 space-y-2 md:text-lg ">
              <p>
                To subscribe to AiProff.ai, please visit our website at
                www.AiProff.ai and click on the "Subscription" hyperlink on the
                top-right of our page. There, provide your email and we will
                send you a mail containing the services offered by AiProff.
              </p>
              <p>
                Simply choose the plan that best suits your needs and let us
                know by simply responding to the mail.
              </p>
              <p>
                If you have any specific questions or need assistance during the
                subscription process, feel free to reach out to our{' '}
                <span className="text-blue-600 hover:underline">
                  <a href="/contact">customer support team</a>
                </span>{' '}
                , and they will be happy to guide you through the process.
              </p>
            </div>
          )}
        </FaqItem>

        <FaqItem isOpen={openIndex === 1} onClick={() => handleToggle(1)}>
          <div className="p-4 cursor-pointer flex justify-between items-center">
            <h2 className="md:text-lg font-medium">
              Is there a user, team, or Enterprise Plan?
            </h2>
            <i
              className={`text-lg lg:text-xl fa ${
                openIndex === 0 ? 'fa-angle-up' : 'fa-angle-down'
              }`}
            ></i>
          </div>
          {openIndex === 1 && (
            <div className="p-4 bg-gray-100 text-gray-700 space-y-2 md:text-lg">
              <p>
                Yes, AiProff.ai offers a range of plans to cater to different
                user needs. We provide individual user plans, team plans for
                collaborative projects, and enterprise plans designed to meet
                the specific requirements of large organizations.
              </p>
              <p>
                For more information,{' '}
                <span className="text-blue-600 hover:underline">
                  <a href="/contact">contact us</a>
                </span>
              </p>
            </div>
          )}
        </FaqItem>

        <FaqItem isOpen={openIndex === 2} onClick={() => handleToggle(2)}>
          <div className="p-4 cursor-pointer flex justify-between items-center">
            <h2 className="text-lg font-medium">
              Do we have a trial version of your API?
            </h2>
            <i
              className={`text-xl fa ${
                openIndex === 0 ? 'fa-angle-up' : 'fa-angle-down'
              }`}
            ></i>
          </div>
          {openIndex === 2 && (
            <div className="p-4 bg-gray-100 text-gray-700 space-y-2 md:text-lg">
              <p>
                Yes, we offer a trial version of our API to allow you to explore
                and experience our services firsthand. The trial period
                typically lasts for 14 days, during which you can access a
                limited set of features and capabilities.
              </p>
              <p>
                This trial version is designed to help you evaluate our API and
                its compatibility with your needs. To get started with the
                trial, visit our website and look for the "Shope" > "Try"
              </p>
              <p>
                Choose your desired API, and follow the registration process,
                and you'll gain access to the trial version.
              </p>
              <p>
                If you have any questions or encounter any issues during the
                trial, our{' '}
                <span className="text-blue-600 hover:underline">
                  <a href="/contact">support team</a>
                </span>{' '}
                is here to assist you
              </p>
            </div>
          )}
        </FaqItem>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
