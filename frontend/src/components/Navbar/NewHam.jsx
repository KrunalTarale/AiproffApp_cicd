import { useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NewHam = ({ closeModal }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [showOptions, setShowOptions] = useState(false);

  const menus = [
    {
      title: 'Applied AI',
      options: [
        { name: 'Applied AI in Health Care', url: '/aihealth' },
        { name: 'Applied AI in Education', url: '/aieducation' },
        { name: 'Applied AI in Aerospace', url: '/aiaerospace' },
      ],
    },
    {
      title: 'Natural Language Processing',
      options: [
        { name: 'NLP in Healthcare', url: '/nlpinhealthcare' },
        { name: 'NLP in Education', url: '/nlpeducation' },
        { name: 'NLP in Finance', url: '/nlpfinance' },
      ],
    },
    {
      title: 'Computer Vision',
      options: [
        { name: 'Computer Vision in Automotive', url: '/cvautomotive' },
        { name: 'Computer Vision in Retail', url: '/cvretail' },
        { name: 'Computer Vision in Manufacturing', url: '/cvmanufacturing' },
      ],
    },
    {
      title: 'Forecasting Using AI',
      options: [
        { name: 'Forecasting Stock Prices', url: '/forecastingstocks' },
        { name: 'Demand Forecasting', url: '/demandforecasting' },
        { name: 'Sales Prediction', url: '/salesprediction' },
      ],
    },
    {
      title: 'Reliable and Robust AI',
      options: [
        {
          name: 'Reliable and Robust AI for Enterprises',
          url: '/rrenterprises',
        },
        {
          name: 'Reliable and Robust AI for Educational Institutions',
          url: '/rreducational',
        },
        { name: 'Reliable and Robust AI for Healthcare', url: '/rrhealthcare' },
      ],
    },
    {
      title: 'Data Science Glossary',
      options: [
        { name: 'A', url: 'https://developers.google.com/machine-learning/glossary#a' },
        { name: 'B', url: 'https://developers.google.com/machine-learning/glossary#b' },
        { name: 'C', url: 'https://developers.google.com/machine-learning/glossary#c' },
        { name: 'D', url: 'https://developers.google.com/machine-learning/glossary#d' },
        { name: 'E', url: 'https://developers.google.com/machine-learning/glossary#e' },
        { name: 'F', url: 'https://developers.google.com/machine-learning/glossary#f' },
        { name: 'G', url: 'https://developers.google.com/machine-learning/glossary#g' },
        { name: 'H', url: 'https://developers.google.com/machine-learning/glossary#h' },
        { name: 'I', url: 'https://developers.google.com/machine-learning/glossary#i' },
        { name: 'J', url: 'https://developers.google.com/machine-learning/glossary#j' },
        { name: 'K', url: 'https://developers.google.com/machine-learning/glossary#k' },
        { name: 'L', url: 'https://developers.google.com/machine-learning/glossary#l' },
        { name: 'M', url: 'https://developers.google.com/machine-learning/glossary#m' },
        { name: 'N', url: 'https://developers.google.com/machine-learning/glossary#n' },
        { name: 'O', url: 'https://developers.google.com/machine-learning/glossary#o' },
        { name: 'P', url: 'https://developers.google.com/machine-learning/glossary#p' },
        { name: 'Q', url: 'https://developers.google.com/machine-learning/glossary#q' },
        { name: 'R', url: 'https://developers.google.com/machine-learning/glossary#r' },
        { name: 'S', url: 'https://developers.google.com/machine-learning/glossary#s' },
        { name: 'T', url: 'https://developers.google.com/machine-learning/glossary#t' },
        { name: 'U', url: 'https://developers.google.com/machine-learning/glossary#u' },
        { name: 'V', url: 'https://developers.google.com/machine-learning/glossary#v' },
        { name: 'W', url: 'https://developers.google.com/machine-learning/glossary#w' },
        { name: 'X', url: 'https://developers.google.com/machine-learning/glossary#x' },
        { name: 'Y', url: 'https://developers.google.com/machine-learning/glossary#y' },
        { name: 'Z', url: 'https://developers.google.com/machine-learning/glossary#z' },
      ],
    },
  ];

  return (
    <div>
      <div>
        <nav className="bg-white border-gray-200 border-2 ">
          <div className="flex flex-wrap items-center justify-between p-6  ">
            <div className="flex items-center mr-auto ml-0">
              <button className="text-black mr-2" onClick={closeModal}>
                <FontAwesomeIcon icon={faTimes} size="3x" />
              </button>
              <div className="">
                <Link to="/" className="">
                  <img src={logo} className="Logoham " alt="Logo" />
                </Link>
              </div>
            </div>

            <div
              className="hidden w-full md:block md:w-auto ml-auto"
              id="navbar-dropdown"
            ></div>
          </div>
        </nav>
      </div>
      <div className="modal-content">
        <div className="md:flex NewHam ">
          <div
            className={`${
              showOptions ? 'hidden' : ''
            } md:block min-h-screen md:min-h-fit w-full md:w-1/2 lg:w-1/4 bg-gradient-to-r from-blue-950 to-blue-600 p-8 text-white font-semibold`}
          >
            {menus.map((menu, index) => (
              <div
                key={index}
                className={`cursor-pointer py-2 flex items-center text-xl mt-10 justify-between ${
                  activeMenu === index ? 'text-blue-400' : 'text-white'
                } hover:text-blue-400`}
                onClick={() => {
                  setActiveMenu(index);
                  setShowOptions(true);
                }}
              >
                <span>{menu.title}</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={`${
                    activeMenu === index ? 'text-blue-400' : ''
                  } ml-2`}
                />
              </div>
            ))}
          </div>
          <div
            className={`${
              showOptions ? '' : 'hidden'
            } min-h-screen md:min-h-fit md:block lg:w-3/4 md:w-1/2 bg-gray-100 md:p-10 p-8`}
          >
            {activeMenu !== null && (
              <div className="md:mt-8 mt-10">
                <div className="flex space-x-2">
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="text-3xl m-2  md:hidden cursor-pointer hover:text-blue-600"
                    onClick={() => setShowOptions(false)}
                  />
                  <h1 className="text-4xl font-semibold">
                    {menus[activeMenu].title}
                  </h1>

                  {/* Add the horizontal line */}
                </div>
                <hr className="my-4 border-gray-400" />{' '}
                <div>
                  <ul className={`space-y-6 ham_list ${activeMenu === 5 ? 'four-columns' : ''}`}>
                    {menus[activeMenu].options.map((option, index) => (
                      <li
                        key={index}
                        className="py-2 text-xl cursor-pointer hover:underline hover:text-blue-600"
                      >
                        <Link to={option.url} target={activeMenu === 5 ? '_blank' : ''}>{option.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHam;
