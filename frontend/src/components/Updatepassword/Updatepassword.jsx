import React , {useState} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const Updatepassword = () => {
  const params = useParams();
  let userid = params.id;

  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [cnfpass , setcnfpass] = useState(false);
  const [result, setresult] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!password || !confirmpassword) {
      setError(true);
    } else {
      if (password === confirmpassword) {
        console.log("password is match");

        const res = await fetch("/updatepassword", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              userid : userid,
              password : password
            }),
          });
          const data = await res.json();
          setresult(data.auth);

          setTimeout(function() {
            navigate("/login");
          }, 3000);
          

      } else {
        setcnfpass(true);
        console.log("password is not match");
      }
    }
  };

  return (
    <div>

              <Helmet>
                <link href="https://www.aiproff.ai/updatepassword/" rel="canonical" />
              </Helmet>

      <div className="h-screen flex whole_form">
        <div className="flex bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center left_side">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">Aiproff</h1>
            <p className="text-white mt-1">Applied AI for Everyone</p>
          </div>
        </div>
        <div className="flex justify-center items-center bg-white right_side">
          <div className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-2">
              Change your password
            </p>
            <p className="text-green-600 font-bold">{result}</p>
            {cnfpass && (
                <span className="warning_massage">Both Password Should be match</span>
            )}
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

            <div className="flex items-center border-2 py-2 px-3 mt-4 rounded-2xl">
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
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>
            {error && !confirmpassword && (
                <span className="warning_massage">Please Enter Confirm Password</span>
              )}

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={handleSubmit}
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updatepassword;
