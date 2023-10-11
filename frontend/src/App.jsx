import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import TopLinks from './components/Toplinks/toplinks';
import Trailer from './components/Trailer/Trailer';
import Trending from './components/TrendingNews/Trending';
import Touch from './components/Touch/Touch';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Foot/Foot';
import Article from './components/Article/Article';
import SearchSite from './components/Search/SearchSite';
import Contact from './components/contact/Contact';
import Assessment from './components/Assisment/Assisment';
import AssessmentStarted from './components/AssessmentStarted/AssessmentStarted';
import UpdateSubscriber from './components/Updated_subscribed_user/Update_Subscribed';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import MVP from './components/MVP/Mvp';
import POC from './components/POC/Poc';
import CAT from './components/CAT/Cat';
import YourArticle from './components/YourArticle/YourArticle';
import Updatepassword from './components/Updatepassword/Updatepassword';
import About from './components/About/About';
import Legal from './components/Legal/Legal';
import Faq from './components/FAQ/FAQ';
import NLP from './components/NLP/Nlp';
import RealaibleAndRodbustAi from './components/RelaibleAndRodbustAI/RelaibleAndRodbustAi';
import ComputerVision from './components/ComputerVision/ComputerVision';
import ForcastingUsingAi from './components/ForcastingUsingAi/ForcastingUsingAi';

import AppliedaiHealthcare from './components/HamburgerArticles/AIHealthcare';
import AppliedaiEducation from './components/HamburgerArticles/AppliedaiEducation';
import AppliedaiAerospace from './components/HamburgerArticles/AppliedaiAerospace.jsx';
import NLPInHealthcare from './components/HamburgerArticles/NLPInHealthcare';
import NLPInEducation from './components/HamburgerArticles/NLPInEducation';
import NLPInFinance from './components/HamburgerArticles/NLPInFinance';

import CVAutomotive from './components/HamburgerArticles/CVAutomotive';
import CVRetail from './components/HamburgerArticles/CVRetail';
import CVManufacturing from './components/HamburgerArticles/CVManufacturing';

import ForecastingStockPrices from './components/HamburgerArticles/ForecastingStockPrices';
import DemandForecasting from './components/HamburgerArticles/DemandForecasting';
import SalesPrediction from './components/HamburgerArticles/SalesPrediction';

import RREnterprises from './components/HamburgerArticles/RREnterprises';
import RRHealthcare from './components/HamburgerArticles/RRHealthcare';
import RREducational from './components/HamburgerArticles/RREducational';

import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

import Buy from './components/Buy/Buy';
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/article" element={<Article />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/yourarticle" element={<YourArticle />} />
        <Route path="/search" element={<SearchSite />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/assessmentStarted/:id" element={<AssessmentStarted />} />
        <Route path="/about" element={<About />} />
        <Route path="/Legal" element={<Legal />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/aihealth" element={<AppliedaiHealthcare />} />
        <Route path="/aieducation" element={<AppliedaiEducation />} />
        <Route path="/aiaerospace" element={<AppliedaiAerospace />} />

        <Route path="/nlpinhealthcare" element={<NLPInHealthcare />} />
        <Route path="/nlpeducation" element={<NLPInEducation />} />
        <Route path="/nlpfinance" element={<NLPInFinance />} />

        <Route path="/cvautomotive" element={<CVAutomotive />} />
        <Route path="/cvretail" element={<CVRetail />} />
        <Route path="/cvmanufacturing" element={<CVManufacturing />} />

        <Route path="/forecastingstocks" element={<ForecastingStockPrices />} />
        <Route path="/demandforecasting" element={<DemandForecasting />} />
        <Route path="/salesprediction" element={<SalesPrediction />} />

        <Route path="/rrenterprises" element={<RREnterprises />} />
        <Route path="/rreducational" element={<RREducational />} />
        <Route path="/rrhealthcare" element={<RRHealthcare />} />

        <Route path="/buy" element={<Buy />} />
        <Route
          path="/updatesubscribeduser/:id"
          element={<UpdateSubscriber />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mvp" element={<MVP />} />
        <Route path="/poc" element={<POC />} />
        <Route path="/cat" element={<CAT />} />
        <Route path="/updatepassword/:id" element={<Updatepassword />} />
        <Route path="/nlp" element={<NLP />} />
        <Route
          path="/Realaible_And_RodbustAi"
          element={<RealaibleAndRodbustAi />}
        />
        <Route path="/Computer_Vision" element={<ComputerVision />} />
        <Route path="/ForcastingUsingAi" element={<ForcastingUsingAi />} />
        <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
        <Route
          path="/"
          element={
            <>
              <div>
                <div className="App flex flex-col">
                  <div className="h-1/5 flex flex-col z-10">
                    <TopLinks className="h-1/2" />
                    <Navbar className="h-1/2" />
                  </div>

                  <Carousel />
                  <Trending className="h-2/5 z-99" />
                </div>
                <div>
                  <Trailer />
                </div>
                <div>
                  <Touch />
                </div>
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
