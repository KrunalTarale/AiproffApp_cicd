import logo from '../assets/logo.png';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { useState, useEffect } from 'react';
import NewHam from './NewHam';
import './NewHam.css';
import { Link } from 'react-router-dom';
import Toplinks from '../Toplinks/toplinks'
import NavSearch from '../Search/NavSearch';

function Navbar() {
  // const auth = localStorage.getItem('user');
  const [auth, setAuth] = useState(localStorage.getItem('user'));

  useEffect(() => {
    const user = localStorage.getItem('user');
    setAuth(user);
  }, []);

  const [offeringsDropdownVisible, setOfferingsDropdownVisible] =
    useState(false);
  const [shopsDropdownVisible, setShopsDropdownVisible] = useState(false);

  let offeringsTimer;
  let shopsTimer;

  const clearOfferingsTimer = () => {
    clearTimeout(offeringsTimer);
  };

  const clearOfferingsTimer1 = () => {
    clearTimeout(offeringsTimer);
  };

  const clearShopsTimer = () => {
    clearTimeout(shopsTimer);
  };

  const [subMenuOpen, setSubMenuOpen] = useState(null);

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

  const handleOfferingsMouseEnter1 = () => {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(true); // Open the modal
  }

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
  <>
  <Toplinks/>
    <nav className="bg-slate-100 border-b-2">
      <div className="flex items-center justify-between lg:p-6 py-4  ">
        <div className="flex items-center justify-between md:mr-auto space-x-4 lg:ml-0 ml-4">
          <div>
            <button className="text-black hover:" onClick={toggleModal}>
              <FontAwesomeIcon icon={faBars} size="2x" />
            </button>
          </div>
          <div className="">
            <Link to="/" className="">
              <img src={logo} className="Logo " alt="Logo" />
            </Link>
          </div>
        </div>

        <div
          className="flex justify-between w-full md:w-auto space-x-20 pt-4"
          id="navbar-dropdown"
          onMouseLeave={handleMouseLeave}
        >
          {' '}
          <ul className="hidden lg:flex font-medium lg:p-0  mr-0 lg:mr-20 lg:space-x-8 lg:mt-0 ">
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4  rounded  md:hover:text-blue-500 md:p-0 text-black "
                aria-current="page"
              >
                ABOUT US
              </Link>
            </li>

            <li
              onMouseEnter={handleOfferingsMouseEnter}
              onMouseLeave={clearOfferingsTimer} //
            >
              <button className="relative flex items-center justify-between w-full py-2 pl-3 pr-4   md:border-0 md:hover:text-blue-500 md:p-0 md:w-auto text-black">
                OFFERINGS{' '}
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
                className={`z-10 font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 divide-gray-600 ${
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
                    <Link
                      to="/mvp"
                      className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
                    >
                      Minimum Viable Product (MVP)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/poc"
                      className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
                    >
                      Proof of Concept (POC)
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cat"
                      className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
                    >
                      Corporate and Academic Training(CAT)
                    </Link>
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
                className={`z-10 font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 divide-gray-600 ${
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
                    <Link
                      to={"/try"}
                      className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
                    >
                      Try
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/buy"}
                      className="block px-4 py-2 hover:bg-gray-100 hover:bg-gray-600 hover:text-white"
                    >
                      Buy
                    </Link>
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
            {auth ? (
              <li>
                <Link
                  to="/yourarticle"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black"
                >
                  YOUR ARTICLES
                </Link>
              </li>
            ) : null}

            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden relative p-2 right-3 top-2  ">
          {/* Dropdown Button */}
          <button
            className="px-4 py-1 text-white bg-blue-600 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="absolute right-2 mt-2 md:w-56 w-40 rounded-md shadow-lg bg-white z_index">
              <div className="rounded-md shadow-xs border-2 border-slate-400">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                >
                  ABOUT US
                </Link>

                <div
                  className="relative" // Just "relative" here
                  onMouseEnter={() => setSubMenuOpen('offering')}
                  onMouseLeave={() => setSubMenuOpen(null)}
                >
                  <span className="block px-4 py-2 text-sm leading-5 text-gray-700 cursor-pointer">
                    OFFERINGS
                  </span>
                  {subMenuOpen === 'offering' && (
                    <div className="absolute right-full top-0 mr-1 ml-2 w-32 rounded-md shadow-lg bg-white">
                      {/* Sub-menu items */}
                      <Link
                        to="/mvp"
                        className="block px-4  py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                      >
                        Minimum Viable Product (MVP)
                      </Link>
                      <Link
                        to="/poc"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                      >
                        Proof of Concept (POC)
                      </Link>
                      <Link
                        to="/"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                      >
                        Corporate and Academic Training(CAT)
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="relative" // Just "relative" here
                  onMouseEnter={() => setSubMenuOpen('shop')}
                  onMouseLeave={() => setSubMenuOpen(null)}
                >
                  <span className="block px-4 py-2 text-sm leading-5 text-gray-700 cursor-pointer">
                    SHOP
                  </span>
                  {subMenuOpen === 'shop' && (
                    <div className="absolute right-full top-0 mr-1 w-32 rounded-md shadow-lg bg-white">
                      {/* Sub-menu items */}
                      <Link
                        to="/product1"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                      >
                        Try
                      </Link>
                      <Link
                        to="/product2"
                        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                      >
                        Buy
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/assessment"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                >
                  ASSESSMENTS
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                >
                  BLOG
                </Link>
                {auth ? (
                <Link
                  to="/yourarticle"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 text-black"
                >
                  YOUR ARTICLES
                </Link>
            ) : null}
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100"
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="pt-4 pr-4 lg:pt-2 lg:pr-0 ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-700 text-2xl lg:text-3xl"
            onClick={toggleSearchModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <NewHam closeModal={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
      {isSearchModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <NavSearch toggleSearchModal={toggleSearchModal} />
          </div>
        </div>
      )}
    </nav>
    </>
  );
}

export default Navbar;
