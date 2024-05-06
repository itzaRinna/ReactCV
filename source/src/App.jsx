import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import hand from './assets/media-assets/robothand.png'; // Import the hand image
import cls from './assets/media-assets/close.png';
import deco from './assets/media-assets/deco.png';
import discord from './assets/media-assets/main/discord.png';
import fb from './assets/media-assets/main/facebook.png';
import github from './assets/media-assets/main/github.png';
import linkedin from './assets/media-assets/main/linkedin.png';
import youtube from './assets/media-assets/main/youtube.png';
import track from './assets/media-assets/soundtracks/main.mp3'
import './App.css';

library.add(fab, fas, far);

function App() {
  // Set up event listeners and functionality using useEffect
  useEffect(() => {
    // No need to call Script1 and Script2 here
    // They will be automatically invoked when the component mounts
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <section className="start">
        {/* Navigation */}
        <nav id="mySidenav" className="sidenav">
          {/* Close button */}
          <a href="#" className="closebtn" onClick={closeNav}>
            <img src={cls} alt="close menu" />
          </a> 
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
            </div>  */}
          </div>
        </nav>
        {/* Logo */}
        <div className="logo" onClick={openNav}>
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
              <div className="heart-icon" onClick={playAudio}>
                {/* Plays audio */}
                <audio ref={audioRef} id="myAudio" src={track} />
                <button type="button">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></path></svg>
                  </i>
                </button>
              </div>
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
      <section className="body">
        <div className='services'>
          <div className="title">
            <h2 className='gradient-text'>Services</h2>
          </div>
          <div className="wrapper">
            <div className="box">
              <div className="front-face">
                <div className="icon">
                  <i className="fas fa-code"></i>
                </div>
                <span>Web Dev</span>
              </div>
              <div className="back-face">
                <span>Web Dev</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="front-face">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <span>Software</span>
              </div>
              <div className="back-face">
                <span>Software</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="front-face">
                <div className="icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <span>Game Dev</span>
              </div>
              <div className="back-face">
                <span>Game Dev</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="title">
            <h2 className="gradient-text">Skills</h2>
          </div>
          <div className="skill-bars">
            <div className="bar">
              <div className="info">
                <i className="fab fa-html5"></i> 
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fab fa-css3-alt"></i> 
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fab fa-js"></i> 
                <span>jQuery</span>
              </div>
              <div className="progress-line jquery">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fab fa-python"></i> 
                <span>Python</span>
              </div>
              <div className="progress-line python">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <i className="fas fa-database"></i> 
                <span>MySQL</span>
              </div>
              <div className="progress-line mysql">
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="title">
            <h2 className="gradient-text">Work</h2>
          </div>
          <div className="work">
            <div className="work-item">
              <img src="https://via.placeholder.com/400" alt="Work 1"/>
              <div className="work-item-content">
                <h3>Work Title 1</h3>
                <p>Description of work 1 goes here.</p>
              </div>
            </div>
            <div className="work-item">
              <img src="https://via.placeholder.com/400" alt="Work 2"/>
              <div className="work-item-content">
                <h3>Work Title 2</h3>
                <p>Description of work 2 goes here.</p>
              </div>
            
            </div>

          </div>
        </div>

      </section>

      <footer>
        <h1>Feel free to contact me!</h1>
        <div class="social">
          <div class="social-icon">
            <a href="#"><img src={github}/></a>
          </div>
          <div class="social-icon">
            <a href="#"><img src={youtube}/></a>
          </div>
          <div class="social-icon">
            <a href="#"><img src={fb}/></a>
          </div>
          <div class="social-icon">
            <a href="#"><img src={linkedin}/></a>
          </div>
          <div class="social-icon">
            <a href="#"><img src={discord}/></a>
          </div>
        </div>
        <p>@Copyright 2022 by <span class="gradient-text">CyZer0</span><img src="./assets/media-assets/CyZerO.webp"/></p>
      </footer>
    </>
  );
}

export default App;
