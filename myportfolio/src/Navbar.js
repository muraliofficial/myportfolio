import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS Files/Navbar.css';

export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [togglebtn, settogglebtn] = useState(false);

    return (
        <nav className='navbar navbar-expand-lg' id='Navbar'>
            <div className='container-fluid'>
                <div className='navbar-brand fs-3' style={{ color: '#FF6500' }}>Portfolio</div>
                <button onChange={togglebtn ? <h1>x</h1> : <h1>+</h1> } id='toggbtn' onClick={() => settogglebtn(!togglebtn)}>{togglebtn ? <h1>x</h1> : <h1>+</h1>}</button>
                <div 
                    className={`collapse navbar-collapse `} 
                    id="navbarNav" 
                    data-aos="fade-down" 
                    style={{ display: togglebtn ? 'block' : 'none' }}  // Inline style to handle display logic
                >
                    <ul className='navbar-nav' id='Nav-ul'>
                        <li className='nav-item'>
                            <span className="material-symbols-outlined md-18" data-to-scrollspy-id='home'>home</span><a href='#home'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <span className="material-symbols-outlined md-18" data-to-scrollspy-id='skills'>handyman</span><a href='#skills'>Skills</a>
                        </li>
                        <li className='nav-item'>
                            <span className="material-symbols-outlined md-18" data-to-scrollspy-id='projects'>terminal</span><a href='#projects'>Projects</a>
                        </li>
                        <li className='nav-item'>
                            <span className="material-symbols-outlined md-18" data-to-scrollspy-id='about'>sentiment_satisfied</span><a href='#about'>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
