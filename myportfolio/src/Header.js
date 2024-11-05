import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileimg from './Images/Profileimg.jpg'
import './CSS Files/Header.css'

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])
  return (
    <div className='container' id='head-container'>
      <div className='row'>
        <div className='col-5' id='Mydetails' data-aos="fade-down">

          <p className='Name'>I'm Murali</p>
          <p className='typing'>Full Stack Developer</p>
          <div id='btndiv'>
            <button id='head-button1'><a href='#footer'>Contact Me</a></button>
            <button id='head-button2'><a href='https://drive.google.com/open?id=1-O8qUn85Cb69n1pz51Vbxeolm3F47uMv&usp=drive_fs' target='blank' download>Resume</a></button>
          </div>
        </div>
        <div className='col-5' id='imgtag'>
          <div id='Myimg' data-aos="fade-left">
            <img src={profileimg} id='profileimg' alt='No-Image'></img>
            <div id='contact'>
              <h3>Murali A</h3>
              <a href='https://wa.me/916383217328?text=Hello...!!! Murali ' id='con'>+91 6383217328</a>
              <a href='mailto:muraliofficial68@gmail.com' id='con'>muraliofficial68@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
