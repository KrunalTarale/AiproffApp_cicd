// import React , {useState , useEffect} from "react";
import './Contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Foot/Foot';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faPhone,
  faSquareEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  useEffect(() => {
    getCountries();
    gettopics();
  }, []);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [topics, setTopics] = useState([]);

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [country, setcountry] = useState('');
  const [contact, setcontact] = useState('');
  const [state, setstate] = useState('');
  const [city, setcity] = useState('');
  const [help, sethelp] = useState('');
  const [massage, setmassage] = useState('');
  const [error, setError] = useState(false);

  const resetForm = () => {
    setfname('');
    setlname('');
    setcountry('');
    setcontact('');
    setstate('');
    setcity('');
    sethelp('');
    setmassage('');
  };

  const handleSubmit = async () => {
    if (
      !fname ||
      !lname ||
      !country ||
      !contact ||
      !state ||
      !city ||
      !help ||
      !massage
    ) {
      setError(true);
      // alert("please fill all the fields")
    } else {
      const res = await fetch('/add_inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          country: country,
          contact: contact,
          state: state,
          city: city,
          help: help,
          massage: massage,
        }),
      });
      const data = await res.json();
      if (data) {
        alert('Thank you for connecting with us...');
        resetForm();
        setError(false);
      }
    }
  };

  const getCountries = async () => {
    console.log('countries');
    let res = await fetch('/get_countries');
    console.log(res);
    let data = await res.json();
    setCountries(data);
    console.log(countries);
  };

  const addCountry = (country) => {
    return <option value={country.id}>{country.name}</option>;
  };

  const getStates = async (e) => {
    let selectedOption = e.target.options[e.target.selectedIndex];
    let selected_country = selectedOption.innerHTML;
    setcountry(selected_country);
    const countryId = e.target.value;
    let res = await fetch('/get_states/' + countryId);
    let data = await res.json();
    setStates(data);
  };

  const addStates = (state) => {
    return <option value={state.id}>{state.name}</option>;
  };

  const getCities = async (e) => {
    let selectedOption = e.target.options[e.target.selectedIndex];
    let selected_state = selectedOption.innerHTML;
    setstate(selected_state);
    const stateId = e.target.value;
    let res = await fetch('/get_cities/' + stateId);
    let data = await res.json();
    setCities(data);
  };

  const addCities = (city) => {
    return <option value={city.name} />;
  };

  const gettopics = async () => {
    let res = await fetch('/get_topics');
    let data = await res.json();
    setTopics(data);
  };

  const getAlltopics = (topic) => {
    return <option value={topic.name}>{topic.name}</option>;
  };

  // Massage counter

  const handleMassage = (e) => {
    const inputValue = e.target.value;
    const inputWithoutSpaces = inputValue.replace(/\s/g, '');

    if (inputWithoutSpaces.length <= 500){
      setmassage(inputValue);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact_form bg-gradient-to-r from-blue-950 to-blue-500 text-white py-8 mt-0 mb-0">
        {/* <div className="flex items-center justify-center">
          <h1 className="px-8 py-3 heading text-6xl font-bold">Contact Us</h1>
        </div> */}
        <div className=" flex justify-center py-8">
          <div className="flex flex-col md:flex-row mx-auto justify-between w-full max-w-7xl ">
            <div className="flex flex-col justify-center items-center p-10 rounded-lg space-y-4 contact_card">
              {/* <FontAwesomeIcon
                icon={faBuilding}
                className="lg:text-6xl md:text-5xl text-4xl text-white"
              /> */}

<iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.69545845297!2d77.07805405!3d28.421554099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2274be0c0a87%3A0xfdc63ca716020a07!2sSector%2057%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1697775643761!5m2!1sen!2sin"
        width="250"
        height="150"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

              <div className=" flex justify-center  items-center flex-col">
                <h1 className=" text-xl lg:text-2xl font-bold">Address :</h1>
                <p className="px-4 py-1 text-xl max-w-xs justify-center  items-center text-center text-slate-300">
                Sector 57, Gurugram, Haryana, India
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center   p-10 rounded-lg space-y-4 contact_card">
              {/* <FontAwesomeIcon
                icon={faEnvelope}
                className="lg:text-6xl md:text-5xl text-4xl text-white"
              /> */}
              <FontAwesomeIcon icon={faSquareEnvelope} className="lg:text-8xl md:text-5xl text-4xl text-white"/>
              <div className=" flex justify-center  items-center flex-col">
                <h1 className="  text-xl lg:text-2xl font-bold">Email us :</h1>
                <p className="px-4 py-1 text-xl max-w-xs justify-center  items-center text-center text-slate-300">
                support@aiproff.ai
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center   p-10 rounded-lg space-y-4 contact_card">
              <FontAwesomeIcon
                icon={faPhone}
                className="lg:text-7xl md:text-5xl text-4xl text-white"
              />
              <div className=" flex justify-center  items-center flex-col">
                <h1 className=" text-xl lg:text-2xl font-bold">
                  Phone support :
                </h1>
                <p className="px-4 py-1 text-xl max-w-xs justify-center  items-center text-center text-slate-300">
                  +918076774495
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Form_page ">
          <htmlForm className="w-full max-w-lg">
            {/* First section */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-slate-300 border border-gray-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                  id="grid-last-name"
                  type="text"
                  value={fname}
                  placeholder="John"
                  onChange={(event) => setfname(event.target.value)}
                  style={{color:'rgb(75 75 75)', fontWeight:500}}
                />
                {error && !fname && (
                  <span className="warning_massage">Please Enter Name</span>
                )}
              </div>

              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-slate-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  value={lname}
                  onChange={(event) => setlname(event.target.value)}
                  style={{color:'rgb(75 75 75)', fontWeight:500}}
                  required
                />
                {error && !lname && (
                  <span className="warning_massage">Please Enter Name</span>
                )}
              </div>
            </div>

            {/* second section */}

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Country Calling Code
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-slate-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={getStates}
                    style={{color:'rgb(75 75 75)', fontWeight:500}}
                  >
                    <option selected value={''}>
                      Select Country
                    </option>
                    {countries.map(addCountry)}
                  </select>
                  {error && !country && (
                    <span className="warning_massage">
                      Please Select Country
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-300"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Contact No.
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-slate-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Phone no."
                  onChange={(event) => setcontact(event.target.value)}
                  value={contact}
                  style={{color:'rgb(75 75 75)', fontWeight:500}}
                />
                {error && !contact && (
                  <span className="warning_massage">Please Add Contact No</span>
                )}
              </div>
            </div>

            {/* Third section  */}

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                  htmlFor="grid-state"
                >
                  State
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-slate-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    onChange={getCities}
                    style={{color:'rgb(75 75 75)', fontWeight:500}}
                  >
                    <option value={''} selected>
                      Select State
                    </option>
                    {states.map(addStates)}
                  </select>
                  {error && !state && (
                    <span className="warning_massage">Please Select State</span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-300"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                  htmlFor="grid-city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-slate-300 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  list="browsers"
                  value={city}
                  onChange={(event) => setcity(event.target.value)}
                  style={{color:'rgb(75 75 75)', fontWeight:500}}
                />

                <datalist id="browsers">{cities.map(addCities)}</datalist>
                {error && !city && (
                  <span className="warning_massage">Please Add Country</span>
                )}
              </div>
            </div>

            <div className="w-full mb-6">
              <label
                className="block uppercase tracking-wide text-slate-300 text-base font-bold mb-2"
                htmlFor="grid-state"
              >
                How can we help you today ?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-slate-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(event) => sethelp(event.target.value)}
                  value={help}
                  style={{color:'rgb(75 75 75)', fontWeight:500}}
                >
                  <option selected value={''}>
                    Topic
                  </option>
                  {topics.map(getAlltopics)}
                  <option value={'others'}>Others</option>
                </select>
                {error && !help && (
                  <span className="warning_massage">Please Select Topic</span>
                )}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-300"></div>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="textarea"
                className="block text-slate-300 text-base font-bold mb-2"
              >
                Your Message
              </label>
              <textarea
                id="textarea"
                name="textarea"
                className="w-full px-3 py-2 text-slate-300 border rounded-lg focus:outline-none focus:shadow-outline"
                rows="4"
                placeholder="Type your message here..."
                value={massage}
                onChange={handleMassage}
                style={{color:'rgb(75 75 75)', fontWeight:500}}
              ></textarea>
              <p>
                Remaining Characters: {500 - massage.replace(/\s/g, '').length}
              </p>
              {error && !massage && (
                <span className="warning_massage">Please Add the Massage</span>
              )}
            </div>

            <div className="text-right">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </htmlForm>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
