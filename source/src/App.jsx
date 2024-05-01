import React, { useEffect } from 'react';
import hand from './assets/media-assets/robothand.png'; // Import the hand image
import cls from './assets/media-assets/close.png';
import deco from './assets/media-assets/deco.png';
import Script1 from './Script1.jsx'; // Import the Script1 component
import Script2 from './Script2.jsx'; // Import the Script2 component
import './App.css';

function App() {
  // Set up event listeners and functionality using useEffect
  useEffect(() => {
    // No need to call Script1 and Script2 here
    // They will be automatically invoked when the component mounts
  }, []);

  return (
    <>
      <section className="start">
        {/* Navigation */}
        <nav id="mySidenav" className="sidenav">
          {/* Close button */}
          
          {/* <a href="#" className="closebtn" onClick={Script2.closeNav}>
            <img src={cls} alt="close menu" /> {/* Use the imported image directly 
          </a> 
          */}
          
          <div className="align-row">
            {/* Navigation links */}
            <div className="nav-wrapper">
              <a href="index.html">Work</a>
              <a href="#">MyCV</a>
              <a href="#">Personal</a>
              <a href="#">About</a>
              <a href="clock.html">Time?</a>
            </div>
            {/* Decoration */}
            
            {/* <div className="decoration-wrapper">
              <div className="eye">
                <img src={deco} alt="decoration" />
              </div>
            </div> 
            */}
            
          </div>
        </nav>

        {/* Logo */}
        <div className="logo" onClick={Script1.openNav}>
          <div className="trap" id="trap1"></div>
          <div className="trap" id="trap2"></div>
          <div className="trap" id="trap3"></div>
        </div>

        {/* Main content */}
        <div className="main-container">
          <div className="herotxt">
            <div className="slide">
              <h1 className="gradient-text">Rinna</h1>
            </div>
            <div className="scroll">
              <h2 className="read-me"><span></span> Developer</h2>
              <p>
                <a href="#body">
                  <button onClick={Script1.playAudio} type="button">
                    <i><iconify-icon icon="bi:heart-fill" width="50" height="50" rotate="45deg" /></i>
                  </button>
                </a>
              </p>
            </div>
          </div>
          {/* Hero image */}
          <div className="outer-heropic-container">
            <div className="inner-heropic-container">
              <div className="reactor-container">
                <div className="triangle"></div>
                <div className="circle-1"><span></span><span></span><span></span><span></span></div>
                <div className="circle-2"></div>
                <div className="circle-3"><span></span><span></span><span></span></div>
                <div className="circle-4"><span></span><span></span><span></span></div>
                <div className="circle-5"></div>
                <div className="circle-6"></div>
                <div className="circle-7"><span></span><span></span><span></span></div>
              </div>
            </div>
            <img src={hand} alt="hand" /> {/* Use the imported image directly */}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
