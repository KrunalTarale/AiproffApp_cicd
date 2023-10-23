import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ReactGA from "react-ga";

const Buy = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
      <Navbar />

      <h1 className="text-4xl font-semibold text-center mt-10">Paid Services/Subscriptions will be available soon</h1>

    </div>
  );
};

export default Buy;
