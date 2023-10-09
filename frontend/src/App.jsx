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
import YourArticle from './components/YourArticle/YourArticle';
import Updatepassword from './components/Updatepassword/Updatepassword';
import About from './components/About/About';
import Faq from './components/FAQ/FAQ';
import NLP from './components/NLP/Nlp';
import RealaibleAndRodbustAi from './components/RelaibleAndRodbustAI/RelaibleAndRodbustAi';
import ComputerVision from './components/ComputerVision/ComputerVision';
import ForcastingUsingAi from './components/ForcastingUsingAi/ForcastingUsingAi';

import AIHealthcare from './components/HamburgerArticles/AIHealthcare';

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
        <Route path="/faq" element={<Faq />} />
        <Route path="/aihealth" element={<AIHealthcare />} />

        <Route
          path="/updatesubscribeduser/:id"
          element={<UpdateSubscriber />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mvp" element={<MVP />} />
        <Route path="/poc" element={<POC />} />
        <Route path="/updatepassword/:id" element={<Updatepassword />} />
        <Route path="/nlp" element={<NLP />} />
        <Route
          path="/Realaible_And_RodbustAi"
          element={<RealaibleAndRodbustAi />}
        />
        <Route path="/Computer_Vision" element={<ComputerVision />} />
        <Route path="/ForcastingUsingAi" element={<ForcastingUsingAi />} />

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
