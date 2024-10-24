import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS Files/Projects.css';
import easymart from './Images/projects/EasyMart-pic.jpeg';
import weather from './Images/projects/Weather-pic.png';
import Anim from './Images/projects/CSS Animation-pic.jpg';
import qr from './Images/projects/QR - pic.png';
import texttovoice from './Images/projects/Text to Voice-pic.png';

export default function Test() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [cardcontent, setcardcontent] = useState(null);

  const btnclick = (btnid) => {
    setcardcontent(cardcontent === btnid ? null : btnid);
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className='container' id='Project-container'>

        <div id='test'>
          <div className='card' id='pro-card' data-aos="fade-right">
            <img src={easymart} id='imgr' alt='easymart' className={cardcontent === 1 ? 'shrink' : ''} />
            <button onClick={() => btnclick(1)} id='toggle-btn'>
              {cardcontent === 1 ? '<' : '>'}
            </button>
          </div>
          <div id='pro-txt' className={cardcontent === 1 ? 'shrink' : ''}>
            <p>
              Easymart is a responsive e-commerce website built to provide a seamless shopping experience. It offers an organized layout for products across multiple categories like Spices, Snacks, Beverages, and Staples. Users can explore products, add them to the cart, and proceed to checkout. The project focuses on both desktop and mobile views, with a clean and consistent image layout using Bootstrap.<br />
              <b>Features:</b> Product search, ‘Add to Cart’ and ‘Buy Now’ options for specific categories, and a fully functional checkout page.<br />
              <b>Technologies:</b> HTML, CSS, JavaScript, Bootstrap, and MERN Stack.
            </p>
          </div>
        </div>

        <div id='test'>
          <div className='card' id='pro-card' data-aos="fade-up">
            <img src={weather} id='imgr' alt='easymart' className={cardcontent === 2 ? 'shrink' : ''} />
            <button onClick={() => btnclick(2)} id='toggle-btn'>
              {cardcontent === 2 ? '<' : '>'}
            </button>
          </div>
          <div id='pro-txt' className={cardcontent === 2 ? 'shrink' : ''}>
            <p>
              A weather forecasting tool designed to provide current weather details for any specified location. This project allows users to search for a city and instantly view its temperature, humidity, and weather conditions.<br />
              <b>Features:</b> Real-time weather data, location search, and a responsive interface for mobile and desktop.<br />
              <b>Technologies:</b> HTML, CSS, JavaScript, and OpenWeather API.
            </p>
          </div>
        </div>

        <div id='test'>
          <div className='card' id='pro-card' data-aos="fade-up">
            <img src={Anim} id='imgr' alt='easymart' className={cardcontent === 3 ? 'shrink' : ''} />
            <button onClick={() => btnclick(3)} id='toggle-btn'>
              {cardcontent === 3 ? '<' : '>'}
            </button>
          </div>
          <div id='pro-txt' className={cardcontent === 3 ? 'shrink' : ''}>
            <p>
              This project focuses on Mouse movement animations to enhance visual engagement on websites. The animations were created to be both smooth and eye-catching.<br />
              <b>Features:</b> When your mouse move the image follows up to you<br />
              <b>Technologies:</b> HTML, CSS and JavaScript
            </p>
          </div>
        </div>

        <div id='test'>
          <div className='card' id='pro-card' data-aos="fade-up">
            <img src={qr} id='imgr' alt='easymart' className={cardcontent === 4 ? 'shrink' : ''} />
            <button onClick={() => btnclick(4)} id='toggle-btn'>
              {cardcontent === 4 ? '<' : '>'}
            </button>
          </div>
          <div id='pro-txt' className={cardcontent === 4 ? 'shrink' : ''}>
            <p>
              This utility tool allows users to convert any text input into a QR code, which can be scanned and read by compatible devices. It's ideal for sharing URLs, contact details, or any short text efficiently.<br />
              <b>Features:</b> Quick text-to-QR conversion, download options, and user-friendly interface.<br />
              <b>Technologies:</b> HTML, CSS, JavaScript, and a QR code generation API.
            </p>
          </div>
        </div>
        <div id='test'>
          <div className='card' id='pro-card' data-aos="fade-up">
            <img src={texttovoice} id='imgr' alt='easymart' className={cardcontent === 5 ? 'shrink' : ''} />
            <button onClick={() => btnclick(5)} id='toggle-btn'>
              {cardcontent === 5 ? '<' : '>'}
            </button>
          </div>
          <div id='pro-txt' className={cardcontent === 5 ? 'shrink' : ''}>
            <p>
              This project is a simple tool to convert text input into speech, enabling users to listen to written content. It’s ideal for accessibility purposes and provides an easy way for users to hear text-based content.<br />
              <b>Features:</b> Text-to-speech functionality, language selection options, and adjustable playback speed.<br />
              <b>Technologies:</b> HTML, CSS, JavaScript, and Web Speech API.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}