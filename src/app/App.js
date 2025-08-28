import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { SlidersColor, SlidersQtd, SlidersSize, SlidersTmp, makeElementDraggable } from '../components/Sliders'

const myLinks = ["https://github.com/naranjii", "https://starred-task-manager.vercel.app", "https://lettrick.vercel.app"];                                                                   // Links para Estrelas Interativas
function randomRange() {
  // Retorna um valor entre -1.0 e -0.5 OU entre 0.5 e 1.0 para posições/animações
  const sign = Math.random() < 0.5 ? -1 : 1;
  return sign * (Math.random() * 0.75 + 0.75);
}
const App = () => {                                                                                   // True App.js
  const starContainer = useRef(null);
  const starContainerint = useRef(null);

  const [fps, setFps] = useState(0);
  const [qtdEstrelas, setQtdEstrelas] = useState(800);
  const [tmpEstrelas, setTmpEstrelas] = useState(1);
  const [sizeEstrelas, setSizeEstrelas] = useState(2);
  const [colorEstrelas, setColorEstrelas] = useState(5);

  const updateQtdEstrelas = (value) => {                                                    // Slider QTD
    setQtdEstrelas(value);
  };
  const updateTmpEstrelas = (tmpvalue) => {                                                 // Slider TMP
    setTmpEstrelas(tmpvalue);
  };
  const updateSizeEstrelas = (sizevalue) => {                                               // Slider SIZE
    setSizeEstrelas(sizevalue);
  };
  const updateColorEstrelas = (colorvalue) => {                                               // Slider SIZE
    setColorEstrelas(colorvalue);
  };

  const generateInteractiveStars = () => {                                                  // Objeto Estrela Interativa
    const intStars = [];
    for (let i = 0; i < myLinks.length; i++) {
      const link = myLinks[i];
      const x1 = (Math.random() * 2) - 1;
      const x2 = (Math.random() * 2) - 1;
      const x5 = (Math.random() * 2) - 1;
      const x6 = (Math.random() * 2) - 1;
      const x9 = (Math.random() * 2) - 1;
      const x10 = (Math.random() * 2) - 1;
      const intStar_x = Math.random() * 100;
      const intStar_y = Math.random() * 100;
      const earthpos_x = ((Math.random() * 7.5 - 6) + 6).toFixed(1);
      const earthpos_y = ((Math.random() * 2 - 1) + 1).toFixed(1);
      intStars.push({ link, intStar_x, intStar_y, earthpos_x, earthpos_y, x1, x2, x5, x6, x9, x10 });
    }
    return intStars;
  };

  useEffect(() => {                                                                         // useEffect
    starContainer.current.innerHTML = '';
    starContainerint.current.innerHTML = '';
    makeElementDraggable('SLIDERS_HEADER', 'slidersinfo');
    let lastFrame = performance.now();
    let frames = 0;
    let lastFpsUpdate = performance.now();
    function loop(now) {
      frames++;
      if (now - lastFpsUpdate > 500) {
        setFps(Math.round((frames * 1000) / (now - lastFpsUpdate)));
        frames = 0;
        lastFpsUpdate = now;
      }
      requestAnimationFrame(loop);
    }
    const id = requestAnimationFrame(loop);
  function generateStar() {                                            // Objeto Estrela Ordinária
    const x = [(Math.random() * 100).toFixed(2)];                                  // Posição
    const y = [(Math.random() * 100).toFixed(2)];


    let h;                                                              // Hue, Saturation, Lighting **WIP**
    let hCond = Math.round(Math.random() * 355);
    if (colorEstrelas !== 10) {
      if ((hCond >= 75 && hCond <= 210) || (hCond >= 225 && hCond <= 240)) {
        h = Math.round(Math.random() * 75)
      }
      else {
        h = hCond
      }
    }
    else { h = hCond };

    let s = Math.round(Math.random() * (colorEstrelas * 10));

    let l;
    let lCond = +((Math.random() * 2) - 1).toFixed(1);
    if (lCond >= 0.9) {
      l = 100
    } else {
      l = Math.round((Math.random() * 90 - 50) + 50)
    };

    let animTimeProb = (Math.random() * 2) - 1;
    let animTime;
    if (animTimeProb >= 0.9) {
      animTime = +(tmpEstrelas * Math.random() * (4 - 3) + 3).toFixed(1)
    } else {
      animTime = +(tmpEstrelas * Math.random() * (2 - 1) + 1).toFixed(1)
    };
    let rndSize;                                                      // Tamanho
    let sizeProb = +((Math.random() * 2) - 1).toFixed(1);
    if (sizeProb >= 0.5) {
      rndSize = +(sizeEstrelas * Math.random() * (3 - 2) + 2).toFixed(1)
    } else {
      rndSize = +(sizeEstrelas * Math.random() * (2 - 1) + 1).toFixed(1)
    };

    let opac;                                                         // Opacidade Inicial
    opac = 0;

    let flash;                                                        // Opacidade Máxima
    let flashProb = (Math.random() * 2) - 1;
    if (flashProb >= 0.5) {
      flash = +(Math.random() * (1 - 0.7) + 0.7).toFixed(1);
    } else {
      flash = +((Math.random() * 0.4 - 0.15) + 0.15).toFixed(1);
    };

    function animPos() {
      let rand = +((Math.random() * 2) - 1).toFixed(1);
      return (rand.toString())
    }
    const [x1, x2, x3, x4, x5, x6] =                 // Posições aleatórias para animação
      [animPos(), animPos(), animPos(), animPos(), animPos(), animPos()];

    const Star = {
      x, y, h, s, l, rndSize, animTime,                    // Passa Props para lista
      flash, opac, x1, x2, x3, x4, x5, x6
    };
    return Star
  };

  function addStar(Star) {                                                             // Renderiza Estrela no DOM
    const starElement = document.createElement('div');
    starElement.className = 'Star';
    starElement.style.height = `${Star.rndSize}px`;
    starElement.style.width = `${Star.rndSize}px`;
    starElement.style.left = `${Star.x}vw`;
    starElement.style.top = `${Star.y}vh`;
    starElement.style.animationDuration = `${Star.animTime}s`;
    starElement.style.backgroundColor = `hsl(${Star.h},${Star.s}%,${Star.l}%)`;
    starElement.style.setProperty('--flash', Star.flash);
    starElement.style.setProperty('--opac', Star.opac);
    starElement.style.setProperty('--x1', Star.x1 + "px");
    starElement.style.setProperty('--x2', Star.x2 + "px");
    starElement.style.setProperty('--x3', Star.x3 + "px");
    starElement.style.setProperty('--x4', Star.x4 + "px");
    starElement.style.setProperty('--x5', Star.x5 + "px");
    starElement.style.setProperty('--x6', Star.x6 + "px");

    starContainer.current.appendChild(starElement);
    starElement.addEventListener("animationend", () => {
      starElement.remove();
      addStar(generateStar())
    });
  };

  function addStars() {
    for (let i = 0; i < qtdEstrelas; i++) {
      addStar(generateStar())
    }
  }
  addStars();

  generateInteractiveStars().forEach(intStar => {                                         // Renderiza Estrela Interativa no DOM
    const intStarElement = document.createElement('div');
    const earthElement = document.createElement('div');
    earthElement.className = 'earth';
    earthElement.style.left = `${intStar.intStar_x + randomRange() * intStar.earthpos_x}%`;
    earthElement.style.top = `${intStar.intStar_y + randomRange() * intStar.earthpos_y}%`;
    earthElement.style.setProperty('--x1', intStar.x10 + "px");
    earthElement.style.setProperty('--x2', intStar.x9 + "px");
    earthElement.style.setProperty('--x5', intStar.x6 + "px");
    earthElement.style.setProperty('--x6', intStar.x5 + "px");
    earthElement.style.setProperty('--x9', intStar.x2 + "px");
    earthElement.style.setProperty('--x10', intStar.x1 + "px");
    intStarElement.className = 'interactive-star';
    intStarElement.style.left = `${intStar.intStar_x}%`;
    intStarElement.style.top = `${intStar.intStar_y}%`;
    intStarElement.style.setProperty('--x1', intStar.x1 + "px");
    intStarElement.style.setProperty('--x2', intStar.x2 + "px");
    intStarElement.style.setProperty('--x5', intStar.x5 + "px");
    intStarElement.style.setProperty('--x6', intStar.x6 + "px");
    intStarElement.style.setProperty('--x9', intStar.x9 + "px");
    intStarElement.style.setProperty('--x10', intStar.x10 + "px");
    intStarElement.addEventListener('click', () => {
      window.open(intStar.link, '_blank');
    });
    starContainerint.current.appendChild(intStarElement);
    starContainerint.current.appendChild(earthElement);
  });

}, [qtdEstrelas, tmpEstrelas, sizeEstrelas, colorEstrelas]);                                                                    // Fim useEffect


return (                                                                               // JSX
  <div className="App">

    <div id="slidersinfo">
      <div id="SLIDERS_HEADER">✦Star Edit UI✦
      </div>
      <div>
        <p>Star Size: {sizeEstrelas}</p>
        <SlidersSize onSliderChange_size={updateSizeEstrelas} />
        <p>Color Variation: {colorEstrelas}</p>
        <SlidersColor onSliderChange_color={updateColorEstrelas} />
        <p>Duration: {tmpEstrelas}</p>
        <SlidersTmp onSliderChange_tmp={updateTmpEstrelas} />
        <p>Quantity: {qtdEstrelas}</p>
        <SlidersQtd onSliderChange_qtd={updateQtdEstrelas} />
        <p style={{marginTop: '8px', color: 'rgb(255, 254, 198, 0.3)'}}>FPS: {fps}</p>
        <div style={{ marginTop: '16px' }}>
          <a
            href="https://github.com/naranjii/star-edit-ui"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'rgb(255, 254, 198, 0.3)' }}
          >
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '6px' }}>
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            naranjii/star-edit-ui
          </a></div></div>
    </div>
    <div>
      <div id="starfield" ref={starContainer}></div>
      <div id="starfieldint" ref={starContainerint}></div>
    </div>
  </div>
);
};

export default App;
