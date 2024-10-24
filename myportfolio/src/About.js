import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutimg from './Images/About/About-2-bg.png'
import './CSS Files/About.css'

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div data-aos='fade-up'>
            <h1>About Me</h1>
            <div className='container' data-aos='flip-left' id='about-container'>
                <div className='row'>

                    {/* About me Image */}

                    <div className='card col-2' id='About-img'>
                        <img src={aboutimg} id='abimg' alt='About' />
                    </div>

                    {/* About Me Text */}

                    <div className='card col-10 d-flex justify-content-center ' id='About-text'>
                        <p style={{textIndent: "50px"}}>Hello! I’m Murali A, a dedicated web developer based in Erode, India. With a background in Information Technology and hands-on experience in front-end development and the MERN stack, I specialize in creating efficient and user-friendly web applications. I began my career in Software Technical Support at Optech Software India Pvt Ltd, where I developed a strong foundation in software functionality and troubleshooting. This role ignited my passion for web development, leading me to complete a MERN stack development course to enhance my skills further.<br /><br />
                        <p style={{textIndent: "50px"}}>Currently, I focus on building dynamic and responsive websites using React. I’ve developed several projects, including Easymart, an e-commerce platform, and I continually strive to refine my skills. My latest project is a personal portfolio, where I showcase my development expertise, utilizing React Spring for engaging animations. Outside of coding, I enjoy staying updated on tech trends and expanding my knowledge to remain at the forefront of the industry.</p><br />
                        I’m eager to connect and collaborate on exciting projects. Let’s create something remarkable together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
