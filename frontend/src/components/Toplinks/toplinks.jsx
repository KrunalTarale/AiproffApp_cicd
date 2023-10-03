import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

const TopLinks = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  // const user = JSON.parse(auth);

  const user = auth ? JSON.parse(auth) : null;

  const username = user ? 'Hello, ' + user.fname : '';

  const logout = () => {
    localStorage.clear();
    navigate('/singup');
  };

  return (
    <div className="">
      <p>{username}</p>

      <div className="absolute top-2 right-4 space-x-4 text-sm">
        {auth ? (
          <Link onClick={logout} className="text-blue-600 hover:underline">
            Logout
          </Link>
        ) : (
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        )}
        <span className="text-black">|</span>
        <a href="#subscribe" className="text-blue-600 hover:underline">
          Subscribe
        </a>
      </div>
    </div>
  );
};

export default TopLinks;
