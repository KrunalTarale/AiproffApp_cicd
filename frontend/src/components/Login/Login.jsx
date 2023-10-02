import React , {useState} from "react";
import { useNavigate } from 'react-router-dom'
import "./Login.css";
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [login, setLogin] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {

    if (!username || !password) {
      setError(true);
    }


    else{

    const res = await fetch("/user_login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username : username,
        password : password
      }),
    });
    const data = await res.json();

    if (data.sanitizedResult && data.sanitizedResult.length > 0 && data.sanitizedResult[0].name !== "") {
        localStorage.setItem("user", JSON.stringify(data.sanitizedResult[0]));
        localStorage.setItem("token", JSON.stringify(data.auth));
        navigate("/")
    } 
    else if (data.auth == "incorrect password") {
        setLogin("Username or Password is Incorrect")
    }
    
  }

  }

  return (
    <div>
      <div className="h-screen flex whole_form">
        <div className="flex bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center left_side">
          <div>
          {/* <img src={logo} className="logo" alt="logo" /> */}
            <h1 className="text-white font-bold text-4xl font-sans">
              Aiproff
            </h1>
            
            <p className="text-white mt-1">
              Applied AI for Everyone
            </p>
            <button
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              <Link to="/">
              Read More
            </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white right_side">
          <div className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-2">
              Welcome Back
            </p>
            <span className="warning_massage">{login}</span>
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
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            {error && !username && (
                <span className="warning_massage">Please Enter Username</span>
              )}
            </div>  

  
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
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {error && !password && (
                <span className="warning_massage">Please Enter Password</span>
              )}
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={handleSubmit}
            >
              Login
            </button>
            <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Forgot Password ?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
