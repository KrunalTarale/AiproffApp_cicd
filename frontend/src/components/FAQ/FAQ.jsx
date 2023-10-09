import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';

const FaqItem = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg mb-4">
      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleFaq}
      >
        <h2 className="text-lg font-medium">{question}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          {answers.map((answer, index) => (
            <p key={index} className="text-gray-700">
              {answer}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'How do I subscribe to AiProff.ai services?',
      answers: [
        'To subscribe to AiProff.ai, please visit our website at www.AiProff.ai and click on the "Subscription" hyperlink on the top-right of our page. There, provide your email and we will send you a mail containing the services offered by AiProff.',
        'Simply choose the plan that best suits your needs and let us know by simply responding to the mail.',
        'If you have any specific questions or need assistance during the subscription process, feel free to reach out to our customer support team [contact us link] , and they will be happy to guide you through the process.',
      ],
    },
    {
      question: 'Is there a user, team, or Enterprise Plan?',
      answers: [
        'Yes, AiProff.ai offers a range of plans to cater to different user needs. We provide individual user plans, team plans for collaborative projects, and enterprise plans designed to meet the specific requirements of large organizations.',
        'For more information, contact us ',
      ],
    },
    {
      question: 'Do we have a trial version of your API?',
      answers: [
        'Yes, we offer a trial version of our API to allow you to explore and experience our services firsthand. The trial period typically lasts for 14 days, during which you can access a limited set of features and capabilities.',
        'This trial version is designed to help you evaluate our API and its compatibility with your needs. To get started with the trial, visit our website and look for the "Shop" > "Try"',
        'Choose your desired API, and follow the registration process, and you will gain access to the trial version.',
        'If you have any questions or encounter any issues during the trial, our support team is here to assist you',
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold mb-20">
          Frequently Asked Questions
        </h1>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answers={faq.answers} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
