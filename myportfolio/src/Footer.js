import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS Files/Footer.css'
import instalogo from './Images/Footer/instagram.png';
import githublogo from "./Images/Footer/github.png";
import xlogo from "./Images/Footer/X.png";
import linkedinlogo from './Images/Footer/linkedin.png';
import fblogo from './Images/Footer/facebook.png';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, [])
  return (
    <div>
      <h1>  </h1>

      {/* Thank Note */}

      <div className='container-fluid' id='Footer-container'>
        <div className='row'>
          <div className='card col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 footer' id='footer-card1' >
            <div id='Thanknote'>
              <p>Thank you for visiting my portfolio!<br />
                I hope you enjoyed exploring my projects and learning more about my work. <br />
                Feel free to connect with me through any of the links below, or reach out if you'd like to collaborate!
              </p>
            </div>
            <div id='Logo-div'>
              <a href='https://github.com/muraliofficial' target='blank'><img id='Nav-logo' src={githublogo} alt='githb' /></a>
              <a href='https://www.linkedin.com/in/murali-a-096738297' target='blank'><img id='Nav-logo' src={linkedinlogo} alt='LinkedIn' /></a>
              <a href='https://www.instagram.com/warlord_murali/' target='blank'><img id='Nav-logo' src={instalogo} alt='Instagram' /></a>
              <a href='https://x.com/Murali_002' target='blank'><img id='Nav-logo' src={xlogo} alt='X' /></a>
              <a href='https://www.facebook.com/profile.php?id=100011556798101' target='blank'><img id='Nav-logo' src={fblogo} alt='facebook' /></a>
            </div>
          </div>

          {/* Quick Navigate */}

          <div className='card col-xs-12 col-sm-12 col-md-6 col-xl-4 footer' id='footer-card2' >
            <h4>Quick Navigate</h4>
            <ul>
              <li id='footerli'><a href='google.com'>Home</a></li>
              <li id='footerli'><a href='google.com'>About me</a></li>
              <li id='footerli'><a href='google.com'>Skills</a></li>
              <li id='footerli'><a href='google.com'>Projects</a></li>
            </ul>
          </div>

          {/* Connect with me */}

          <div className="card col-xs-12 col-sm-12 col-md-6 col-xl-4 footer" id="footer-card3">
            <div id="connectwithme">
              <h4 style={{ color: "#FF6500" }}>Connect with Me</h4>
              <ul className="contact-list">
                <li><span className="material-symbols-outlined">emoji_people</span> Murali A</li>
                <li><span className="material-symbols-outlined">phone_in_talk</span> <a href='tel:+91 6383217328'>+91 XXXXX XXXXX</a></li>
                <li><span className="material-symbols-outlined">mail</span> <a href="mailto:murali_official@outlook.com" target="_top">murali_official@outlook.com</a></li>
                <li><span className="material-symbols-outlined">home_pin</span> Erode, Tamil Nadu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final END-Caption */}

        <div className='row'>
          <hr />
          <div className='endcap'>
            <p>Designed with <span style={{ color: "red" }}>❤</span> by Murali</p>
          </div>
        </div>
      </div>
    </div>
  )
}
