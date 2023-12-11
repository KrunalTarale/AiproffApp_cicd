// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import ReactGA from "react-ga";
// const GA_TRACKING_ID = "G-P9Y3G1PK8G";
// ReactGA.initialize(GA_TRACKING_ID);

// import "./App.css";

// import Navbar from "./components/Navbar/Navbar.jsx";
// import Trailer from "./components/Trailer/Trailer.jsx";
// import Trending from "./components/TrendingNews/Trending.jsx";
// import Touch from "./components/Touch/Touch.jsx";
// import Carousel from "./components/Carousel/Carousel.jsx";
// import Footer from "./components/Foot/Foot.jsx";
// import Article from "./components/Article/Article.jsx";
// import SearchSite from "./components/Search/SearchSite.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import Assessment from "./components/Assisment/Assisment.jsx";
// import AssessmentStarted from "./components/AssessmentStarted/AssessmentStarted.jsx";
// import UpdateSubscriber from "./components/Updated_subscribed_user/Update_Subscribed.jsx";
// import Blog from "./components/Blog/Blog.jsx";
// import Login from "./components/Login/Login.jsx";
// import Signin from "./components/Signin/Signin.jsx";
// import MVP from "./components/MVP/Mvp.jsx";
// import POC from "./components/POC/Poc.jsx";
// import CAT from "./components/CAT/Cat.jsx";
// import YourArticle from "./components/YourArticle/YourArticle.jsx";
// import Updatepassword from "./components/Updatepassword/Updatepassword.jsx";
// import About from "./components/About/About.jsx";
// import Legal from "./components/Legal/Legal.jsx";
// import Faq from "./components/FAQ/FAQ.jsx";
// import NLP from "./components/NLP/Nlp.jsx";
// import RealaibleAndRodbustAi from "./components/RelaibleAndRodbustAI/RelaibleAndRodbustAi.jsx";
// import ComputerVision from "./components/ComputerVision/ComputerVision.jsx";
// import ForcastingUsingAi from "./components/ForcastingUsingAi/ForcastingUsingAi.jsx";

// import AppliedaiHealthcare from "./components/HamburgerArticles/AIHealthcare.jsx";
// import AppliedaiEducation from "./components/HamburgerArticles/AppliedaiEducation.jsx";
// import AppliedaiAerospace from "./components/HamburgerArticles/AppliedaiAerospace.jsx";
// import NLPInHealthcare from "./components/HamburgerArticles/NLPInHealthcare.jsx";
// import NLPInEducation from "./components/HamburgerArticles/NLPInEducation.jsx";
// import NLPInFinance from "./components/HamburgerArticles/NLPInFinance.jsx";

// import CVAutomotive from "./components/HamburgerArticles/CVAutomotive.jsx";
// import CVRetail from "./components/HamburgerArticles/CVRetail.jsx";
// import CVManufacturing from "./components/HamburgerArticles/CVManufacturing.jsx";

// import ForecastingStockPrices from "./components/HamburgerArticles/ForecastingStockPrices.jsx";
// import DemandForecasting from "./components/HamburgerArticles/DemandForecasting.jsx";
// import SalesPrediction from "./components/HamburgerArticles/SalesPrediction.jsx";

// import RREnterprises from "./components/HamburgerArticles/RREnterprises.jsx";
// import RRHealthcare from "./components/HamburgerArticles/RRHealthcare.jsx";
// import RREducational from "./components/HamburgerArticles/RREducational.jsx";

// import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy.jsx";
// import Tags from "./components/Tags/Tags.jsx";
// import Buy from "./components/Buy/Buy.jsx";
// // import ChatBot from './components/ChatBot/ChatBot'
// import ChatComponent from "./components/ChatComponent/ChatComponent.jsx";

// import NotFound from "./components/NotFound/NotFound.jsx";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// function App() {
//   return (
//     <>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/applied-ai" element={<Article />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/articles" element={<YourArticle />} />
//         <Route path="/search" element={<SearchSite />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/assessment" element={<Assessment />} />
//         <Route path="/assessmentStarted/:id" element={<AssessmentStarted />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/Legal" element={<Legal />} />
//         <Route path="/faq" element={<Faq />} />

//         <Route
//           path="/applied-ai-healthcare"
//           element={<AppliedaiHealthcare />}
//         />
//         <Route path="/applied-ai-education" element={<AppliedaiEducation />} />
//         <Route path="/applied-ai-aerospace" element={<AppliedaiAerospace />} />

//         <Route path="/nlp-in-healthcare" element={<NLPInHealthcare />} />
//         <Route path="/nlp-in-education" element={<NLPInEducation />} />
//         <Route path="/nlp-in-finance" element={<NLPInFinance />} />

//         <Route path="/computer-vision-automotive" element={<CVAutomotive />} />
//         <Route path="/computer-vision-retail" element={<CVRetail />} />
//         <Route
//           path="/computer-vision-manufacturing"
//           element={<CVManufacturing />}
//         />

//         <Route
//           path="/ai-forecasting-stocks"
//           element={<ForecastingStockPrices />}
//         />
//         <Route path="/ai-demand-forecasting" element={<DemandForecasting />} />
//         <Route path="/ai-sales-prediction" element={<SalesPrediction />} />

//         <Route
//           path="/reliable-and-robust-ai-enterprise"
//           element={<RREnterprises />}
//         />
//         <Route
//           path="/reliable-and-robust-ai-education"
//           element={<RREducational />}
//         />
//         <Route
//           path="/reliable-and-robust-ai-healthcare"
//           element={<RRHealthcare />}
//         />

//         <Route path="/buy" element={<Buy />} />
//         <Route path="/try" element={<Buy />} />
//         <Route
//           path="/updatesubscribeduser/:id"
//           element={<UpdateSubscriber />}
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/sign-in" element={<Signin />} />
//         <Route path="/mvp" element={<MVP />} />
//         <Route path="/poc" element={<POC />} />
//         <Route path="/cat" element={<CAT />} />
//         <Route path="/updatepassword/:id" element={<Updatepassword />} />
//         <Route path="/introduction-to-nlp" element={<NLP />} />
//         <Route
//           path="/reliable-and-robust-ai"
//           element={<RealaibleAndRodbustAi />}
//         />
//         <Route path="/computer-vision" element={<ComputerVision />} />
//         <Route path="/forecasting-using-ai" element={<ForcastingUsingAi />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//         <Route path="/tags/:tagname" element={<Tags />} />
//         <Route path="/chatbot" element={<ChatComponent />} />
//         <Route path="*" element={<NotFound />} />
//         <Route
//           path="/"
//           element={
//             <>
//               <Helmet>
//                 <meta charSet="utf-8" />
//                 <title>AiProff - Smart Move for Every Business</title>
//                 <meta
//                   name="description"
//                   content="Empower your journey in Applied AI and ML with AiProff. With a focus on AI/ML,  NLP, Computer Vision, and Time Series Analysis, our experts provide cutting-edge solutions and training for enterprises. Leverage your business with our Applied AI/ML expertise and demos now!"
//                 />
//                 <meta name="keywords" content="Applied AI, ML, AiProff" />
//                 {/* <link href="https://www.aiproff.ai/" rel="canonical" /> */}
//               </Helmet>
//               <div>
//                 <div className="App flex flex-col">
//                   <div className="h-1/5 flex flex-col z-10">
//                     <Navbar className="h-1/2" />
//                   </div>

//                   <Carousel />
//                   <Trending className="h-2/5 z-99" />
//                 </div>
//                 <div>
//                   <Trailer />
//                 </div>
//                 <div>
//                   <Touch />
//                 </div>
//                 <Footer />
//               </div>
//             </>
//           }
//         />

//         {/* Rediricting old links to the new links */}
//         <Route path="/blog-3" element={<Navigate to="/blog" />} />
//         <Route path="/assessments" element={<Navigate to="/assessment" />} />
//         <Route path="/contact-us" element={<Navigate to="/contact" />} />
//         <Route path="/home-2" element={<Navigate to="/" />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from "react";
import MVP from "./components/MVP/Mvp.jsx";
import { Routes, Route,Link } from "react-router-dom";
import AppliedaiHealthcare from "./components/HamburgerArticles/AIHealthcare.jsx";
import NotFound from './components/NotFound/NotFound.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MVP />} />
        <Route
          path="/a"
          element={
            <>
              <h1>this is second page</h1>
              <Link to="/">Click me</Link>
            </>
          }
        />
        <Route path="/b" element={<AppliedaiHealthcare />} />
        <Route path="/d" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
