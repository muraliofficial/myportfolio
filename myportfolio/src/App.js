import ScrollSpy from 'react-ui-scrollspy';
import './CSS Files/App.css'
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <ScrollSpy scrollThrottle={100} offset={0}>
          <Navbar />
          <section id="home">
            <Header />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id='footer'>
          <Footer />
          </section>
        </ScrollSpy>
      </div>
    </div>
  );
}

export default App;
