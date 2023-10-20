import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
// import OurTeam from './Team.json';
import image1 from '../assets/Team/Nitin_Saraswat.png';
import image2 from '../assets/Team/Aditya_Anil.png';
import image3 from '../assets/Team/Aditya_Raj.png';
import image4 from '../assets/Team/Jayalakshmi_Rajesh.png';
import image5 from '../assets/Team/Krunal_Tarale.png';
import image6 from '../assets/Team/Vintha_Meghanath_Reddy.png';
import image7 from '../assets/Team/Usman_Khatri.png';

const ourteam = [
  {
    name: "Nitin Saraswat",
    position: "Founder and Senior Machine Learning Engineer",
    img: image1,
    linkdin_url: "https://www.linkedin.com/in/nitinsaraswat/",
  },
  {
    name: "Aditya Anil",
    position: "Senior Technical Writer & Content Developer",
    img: image2,
    linkdin_url: "https://www.linkedin.com/in/its-aditya-an1l/",
  },
  {
    name: "Aditya Raj",
    position: "Machine Learning Engineer",
    img: image3,
    linkdin_url: "https://www.linkedin.com/in/adityarajsingh142/",
  },
  {
    name: "Jayalakshmi Rajesh",
    position: "Graphics Designer & Content Developer",
    img: image4,
    linkdin_url: "https://www.linkedin.com/in/jayalakshmi-rajesh-74ba47243/",
  },
  {
    name: "Krunal Tarale",
    position: "Full Stack Web Developer",
    img: image5,
    linkdin_url: "https://www.linkedin.com/in/krunal-tarale-40169923b/",
  },
  {
    name: "Vintha Meghanath Reddy",
    position: "Machine Learning Engineer",
    img: image6,
    linkdin_url: "https://www.linkedin.com/in/meghanathreddyv/",
  },
  {
    name: "Usman Khatri",
    position: "Full Stack App Developer",
    img: image7,
    linkdin_url: "https://www.linkedin.com/in/usman-khatri-92aa94223/",
  },
];

const Team = () => {

  function members(member) {
    return (
      <div className="_card">
        <div className="card-info">
          <div
            className="card-avatar"
            style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: 'cover'
            }}
          ></div>
          <div className="card-title">{member.name}</div>
          <div className="card-subtitle">{member.position}</div>
        </div>
        <Link to={member.linkdin_url} target="blank">
          <ul className="card-social">
            <li className="card-social__item">View Profile</li>
            <li className="card-social__item linkdin_icon">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </li>
          </ul>
        </Link>
      </div>
    );
  }

  return (
    <div className="teamcontainer" id="team">
        <h1 className="lg:text-5xl text-4xl font-bold headings">
        Our Team
      </h1>
      <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
        At AIProff, we believe that our teams are our greatest asset. We are
        proud to have a diverse and talented workforce that shares common vision
        and values.{" "}
      </p>
      <p className="leading-loose text-md md:text-xl text-gray-700 mb-3">
        Our teams work collaboratively across different functions and regions to
        deliver innovative solutions for our customers. We foster a culture of
        learning and growth, where everyone can contribute their skills and
        ideas, and where excellence and integrity are rewarded.{" "}
      </p>

    <h2 className="text-3xl lg:text-2xl font-semibold leading-snug sub_headings">Meet the AIProff team: </h2>

      <div className="allcards">{ourteam.map(members)}</div>
    </div>
  );
};

export default Team;
