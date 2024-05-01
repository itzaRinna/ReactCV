import { useEffect } from 'react';

function Script1() {
  useEffect(() => {
    // Function to refresh CSS
    function refreshCSS() {
      const sheets = Array.from(document.getElementsByTagName("link"));
      const head = document.getElementsByTagName("head")[0];
      sheets.forEach(elem => {
        const parent = elem.parentElement || head;
        parent.removeChild(elem);
        const rel = elem.rel;
        if (elem.href && typeof rel !== "string" || rel.length === 0 || rel.toLowerCase() === "stylesheet") {
          let url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
          elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
        }
        parent.appendChild(elem);
      });
    }

    // WebSocket connection for live reload
    if ('WebSocket' in window) {
      const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
      const address = protocol + window.location.host + window.location.pathname + '/ws';
      const socket = new WebSocket(address);
      socket.onmessage = function (msg) {
        if (msg.data === 'reload') window.location.reload();
        else if (msg.data === 'refreshcss') refreshCSS();
      };
      if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
        console.log('Live reload enabled.');
        sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
      }
    } else {
      console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
    }
  }, []); // Empty dependency array means this effect runs only once on component mount

  // Function to play audio
  function playAudio() {
    const x = document.getElementById("myAudio");
    if (x) {
      x.play();
    }
  }

  // Function to pause audio
  function pauseAudio() {
    const x = document.getElementById("myAudio");
    if (x) {
      x.pause();
    }
  }

  return null; // Since this is not UI, returning null
}

export default Script1;
