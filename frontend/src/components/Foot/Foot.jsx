import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

import Cookie from '../Cookie/Cookie';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [showCookieModal, setShowCookieModal] = useState(false);

  const handleCookiePreferenceClick = () => {
    setShowCookieModal(true);
  };

  const handleCloseCookieModal = () => {
    setShowCookieModal(false);
  };

  // New code starts

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('/subscribe_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const data = await res.json();
    if (data) {
      setStatus(data.status);
      setEmail('');
    }
  };

  const [offeringsDropdownVisible, setOfferingsDropdownVisible] =
    useState(false);
  const [shopsDropdownVisible, setShopsDropdownVisible] = useState(false);

  let offeringsTimer;
  let shopsTimer;

  const clearOfferingsTimer = () => {
    clearTimeout(offeringsTimer);
  };

  const clearShopsTimer = () => {
    clearTimeout(shopsTimer);
  };

  const closeDropdowns = () => {
    clearOfferingsTimer();
    clearShopsTimer();
    setOfferingsDropdownVisible(false);
    setShopsDropdownVisible(false);
  };

  const handleOfferingsMouseEnter = () => {
    clearShopsTimer();
    setOfferingsDropdownVisible(true);
    setShopsDropdownVisible(false);
  };

  const handleShopsMouseEnter = () => {
    clearOfferingsTimer();
    setShopsDropdownVisible(true);
    setOfferingsDropdownVisible(false);
  };

  const handleMouseLeave = () => {
    offeringsTimer = setTimeout(() => {
      setOfferingsDropdownVisible(false);
    }, 300);

    shopsTimer = setTimeout(() => {
      setShopsDropdownVisible(false);
    }, 300);
  };

  // New code ends

  return (
    <footer className="bg-slate-100 text-black py-6 lg:py-8 border-t-2">
      <div className="mx-auto lg:mx-24 px-20 ">
        <div className="flex lg:flex-row flex-col justify-center  lg:justify-between space-y-8 md:justify-start items-center  ">
          <div className="space-y-6">
            <div className="text-center lg:text-left ">
              <h2 className="text-xl font-semibold mb-4 max-w-xs">
                Subscribe to stay updated on Applied AI
              </h2>
            </div>
            <p>{status}</p>
            <div className="flex">
              <input
                type="email"
                className="px-4 py-2 border border-gray-400 rounded-l-md focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>

          <div className=" flex flex-col  md:justify-end space-y-10 lg:space-y-5">
            <div
              className="lg:hidden flex justify-between w-full pt-4"
              id="navbar-dropdown"
              onMouseLeave={handleMouseLeave}
            >
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:flex font-medium md:space-x-6  ">
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4  rounded  md:hover:text-blue-500 md:p-0 text-black "
                    aria-current="page"
                  >
                    ABOUT US
                  </a>
                </li>

                <li
                  onMouseEnter={handleOfferingsMouseEnter}
                  onMouseLeave={clearOfferingsTimer} //
                >
                  <button className="relative flex items-center justify-between w-full py-2 pl-3 pr-4   md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto text-black">
                    OFFERING
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                      offeringsDropdownVisible ? 'block' : 'hidden'
                    } absolute mt-2`}
                    onMouseEnter={clearOfferingsTimer} // Add onMouseEnter to clear the timer
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event handler
                  >
                    <ul
                      className="py-2 text-sm  text-white"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Minimum Viable Product (MVP)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Proof of Concept (POC)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Corporate and Academic Training(CAT)
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li
                  onMouseEnter={handleShopsMouseEnter}
                  onMouseLeave={clearShopsTimer} // A
                >
                  <button className="relative flex items-center justify-between w-full py-2 pl-3 pr-4   md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto text-black">
                    SHOP{' '}
                    <svg
                      className="w-2.5 h-2.5 ml-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    className={`z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
                      shopsDropdownVisible ? 'block' : 'hidden'
                    } absolute mt-2`}
                    onMouseEnter={clearShopsTimer} // Add onMouseEnter to clear the timer
                    onMouseLeave={handleMouseLeave} // Add onMouseLeave event handler
                  >
                    <ul
                      className="py-2 text-sm  text-white"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Try
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    to="/assessment"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black"
                  >
                    ASSESSMENTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black"
                  >
                    BLOG
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4 ">
              <a href="#" className="hover:text-blue-500">
                Legal
              </a>
              <a href="#" className="hover:text-blue-500">
                FAQ
              </a>
              <a
                href="#"
                className="hover:text-blue-500"
                onClick={handleCookiePreferenceClick}
              >
                Cookie Preference
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com/aiproff_ai"
                className="text-gray-600 hover:text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="lg"
                  style={{ color: '#292323' }}
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="lg"
                  style={{ color: '#303030' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/aiproff/"
                className="text-gray-600 hover:text-blue-500"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  style={{ color: '#2e2e2e' }}
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="lg"
                  style={{ color: '#3d3d3d' }}
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  style={{ color: '#3d3d3d' }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="">
          <div className="w-full border-t mt-6 border-gray-300 flex justify-between items-center pt-3 ">
            <p className="text-gray-600 justify-end">
              {' '}
              &copy; {currentYear} Aiproff.ai
            </p>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showCookieModal && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
          <div className="fixed inset-0 flex justify-center items-center">
            <Cookie onClose={handleCloseCookieModal} />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
