import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import htmlimg from './Images/Skill/HTML.png';
import cssimg from './Images/Skill/CSS.png';
import jsimg from './Images/Skill/JavaScrpit.png';
import reactimg from './Images/Skill/ReactJS.png';
import bootstarpimg from './Images/Skill/bootstarp.png';
import nodeimg from './Images/Skill/Node.png';
import ejsimg from './Images/Skill/ExpressJS.png';
import mongodbimg from './Images/Skill/MongoDB.png';
import sqlimg from './Images/Skill/MySql.png';
import './CSS Files/Skill.css';

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [])
  return (
    <div data-aos='fade-up'>
      <h1>Skills</h1>
      <div className='container' id='Skill-container' >
        <div className='row d-flex justify-content-center'>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'>
            <img src={htmlimg} alt='Html5-Image' id='Skill-img' />
            <h2>HTML 5</h2>
            <div id='details'>
              <p>HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={cssimg} alt='CSS3-Image' id='Skill-img' /> <h2>CSS 3</h2>
            <div id='details'>
              <p>Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={jsimg} alt='JS-Image' id='Skill-img' /> <h2>JS</h2>
            <div id='details'>
              <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={reactimg} alt='ReactJS-Image' id='Skill-img' /> <h2>React JS</h2>
            <div id='details'>
              <p>React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook Inc. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={bootstarpimg} alt='bootstrap-Image' id='Skill-img' /> <h2>Bootstrap 5</h2>
            <div id='details'>
              <p>Bootstrap is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={nodeimg} alt='Node-Image' id='Skill-img' /> <h2>Node JS</h2>
            <div id='details'>
              <p>Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={ejsimg} alt='Ejs-Image' id='Skill-img' /> <h2>ExpressJS</h2>
            <div id='details'>
              <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={mongodbimg} alt='MongoDB-Image' id='Skill-img' /> <h2>MongoDB</h2>
            <div id='details'>
              <p>Start Fast & Grow Big — Build Your Next Project on MongoDB Atlas, the Cloud-Native Document Database as a Service. The Easiest Way to Deploy, Operate, and Scale MongoDB in the Cloud in Just a Few Clicks</p>
            </div>
          </div>
          <div className='card col-xs-12 col-sm-8 col-md-6 col-lg-3 col-xl-3' data-aos="fade-up" id='card1'><img src={sqlimg} alt='Sql-Image' id='Skill-img' /> <h2>MySql</h2>
            <div id='details'>
              <p>Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}