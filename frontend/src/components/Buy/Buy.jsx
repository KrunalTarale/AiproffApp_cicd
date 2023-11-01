import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const Buy = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div>
          <Helmet>
            <link href="https://www.aiproff.ai/buy" rel="canonical" />
          </Helmet>
      <Navbar />

      <h1 className="text-4xl font-semibold text-center mt-10">Paid Services/Subscriptions will be available soon</h1>

    </div>
  );
};

export default Buy;
