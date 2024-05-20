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
import track from './assets/media-assets/soundtracks/main.mp3';
import './App.css';

library.add(fab, fas, far);

const App: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const openNav = () => {
    document.getElementById("mySidenav")!.style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav")!.style.width = "0";
  };

  return (
    <>
      <section className="start">
        <nav id="mySidenav" className="sidenav">
          <a href="#" className="closebtn" onClick={closeNav}>
            <img src={cls} alt="close menu" />
          </a>
          <div className="align-row">
            <div className="nav-wrapper">
              <a href="index.html">Work</a>
              <a href="#">MyCV</a>
              <a href="#">Personal</a>
              <a href="#">About</a>
              <a href="clock.html">Time?</a>
            </div>
          </div>
        </nav>
        <div className="logo" onClick={openNav}>
          <div className="trap" id="trap1"></div>
          <div className="trap" id="trap2"></div>
          <div className="trap" id="trap3"></div>
        </div>
        <div className="main-container">
          <div className="herotxt">
            <div className="slide">
              <h1 className="gradient-text">Rinna</h1>
            </div>
            <div className="scroll">
              <h2 className="read-me"><span></span> Developer</h2>
              <div className="heart-icon" onClick={playAudio}>
                <audio ref={audioRef} id="myAudio" src={track} />
                <button type="button">
                  <FontAwesomeIcon icon={['fas', 'heart']} size="2x" />
                </button>
              </div>
            </div>
          </div>
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
            <img src={hand} alt="hand" />
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
                  <FontAwesomeIcon icon={['fas', 'code']} />
                </div>
                <span>Web Dev</span>
              </div>
              <div className="back-face">
                <span>Web Dev</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.</p>
              </div>
            </div>
            <div className="box">
              <div className="front-face">
                <div className="icon">
                  <FontAwesomeIcon icon={['fas', 'chart-line']} />
                </div>
                <span>Software</span>
              </div>
              <div className="back-face">
                <span>Software</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.</p>
              </div>
            </div>
            <div className="box">
              <div className="front-face">
                <div className="icon">
                  <FontAwesomeIcon icon={['fas', 'rocket']} />
                </div>
                <span>Game Dev</span>
              </div>
              <div className="back-face">
                <span>Game Dev</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem in deleniti vitae beatae veritatis aliquid porro perspiciatis dolores impedit ad.</p>
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
                <FontAwesomeIcon icon={['fab', 'html5']} />
                <span>HTML</span>
              </div>
              <div className="progress-line html">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                <span>CSS</span>
              </div>
              <div className="progress-line css">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <FontAwesomeIcon icon={['fab', 'js']} />
                <span>JavaScript</span>
              </div>
              <div className="progress-line js">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <FontAwesomeIcon icon={['fab', 'python']} />
                <span>Python</span>
              </div>
              <div className="progress-line python">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <div className="info">
                <FontAwesomeIcon icon={['fas', 'database']} />
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
              <img src="https://via.placeholder.com/400" alt="Work 1" />
              <div className="work-item-content">
                <h3>Work Title 1</h3>
                <p>Description of work 1 goes here.</p>
              </div>
            </div>
            <div className="work-item">
              <img src="https://via.placeholder.com/400" alt="Work 2" />
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
        <div className="social">
          <div className="social-icon">
            <a href="#"><img src={github} alt="GitHub" /></a>
          </div>
          <div className="social-icon">
            <a href="#"><img src={youtube} alt="YouTube" /></a>
          </div>
          <div className="social-icon">
            <a href="#"><img src={fb} alt="Facebook" /></a>
          </div>
          <div className="social-icon">
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
          <div className="social-icon">
            <a href="#"><img src={discord} alt="Discord" /></a>
          </div>
        </div>
        <p>&copy; 2022 by <span className="gradient-text">CyZer0</span> <img src="./assets/media-assets/CyZerO.webp" alt="CyZerO logo" /></p>
      </footer>
    </>
  );
}

export default App;
