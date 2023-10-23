import React, { useState, useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./Signin.css";
import logo from '../assets/logo_webp.webp';
import ReactGA from 'react-ga';

const Signin = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [fname, setfname] = React.useState("");
  const [lname, setlname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [cpassword, setcpassword] = React.useState("");
  const [error, setError] = useState(false);
  const [checkpass, setCheckpass] = useState("");
  const [validuser , setValiduser] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!fname || !lname || !email || !password || !cpassword) {
      setError(true);
    } else {
      if (password === cpassword) {
        setCheckpass("");

        const res = await fetch("/user_signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();

      if(data.message == "User already exists"){
        setValiduser(true);
      }
        else{
          navigate("/login");
        }


      } else {
        setCheckpass("Both Password Should be match");
      }

      
    }
  };

  return (
    <div>
      <div className="h-screen whole_form">
        <div className="flex bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center left_side desktop_view">
          <div>
            <div className="text-white font-bold text-4xl font-sans">
            <img src={logo} className="login_Logo" alt="Logo" />
            </div>
            <p className="text-white mt-1">
            Applied AI for Everyone
            </p>
            
            <button
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 read_more"
            >
              <Link to="/">
              Go Home
            </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white right_side">
          <div className="bg-white form_container">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello</h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome To AiProff
            </p>
            {validuser && (
              <span className="warning_massage">User Already Exist</span>
            )}
            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="First Name"
                  onChange={(event) => setfname(event.target.value)}
                />
              </div>
              {error && !fname && (
                <span className="warning_massage">Please Enter First Name</span>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Last Name"
                  onChange={(event) => setlname(event.target.value)}
                />
              </div>
              {error && !lname && (
                <span className="warning_massage">Please Enter Last Name</span>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  onChange={(event) => setemail(event.target.value)}
                />
              </div>
              {error && !email && (
                <span className="warning_massage">Please Enter Email</span>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  onChange={(event) => setpassword(event.target.value)}
                />
              </div>
              {error && !password && (
                <span className="warning_massage">Please Enter Password</span>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 outline-none border-none"
                  type="password"
                  name=""
                  id=""
                  placeholder="Confirm Password"
                  onChange={(event) => setcpassword(event.target.value)}
                />
              </div>
              {error && !cpassword && (
                <span className="warning_massage">
                  Please Enter Confirm Password
                </span>
              )}
              <span className="warning_massage">{checkpass}</span>
            </div>

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <span className="text-sm ml-2">
              Already have an account?<Link className="text-sm hover:text-blue-500 cursor-pointer" to={"/login"}> Log In</Link>
            </span>
          </div>
        </div>
        <div className="flex bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center left_side mobile_view">
          <div>
            <div className="text-white font-bold text-4xl font-sans mt-9 mb-9">
            <img src={logo} className="login_Logo" alt="Logo" />
            </div>
            <p className="text-white mt-1 text-center">
            Applied AI for Everyone
            </p>
            
            <button
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 read_more"
            >
              <Link to="/">
              Go Home
            </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
