import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import { SlidersColor, SlidersQtd, SlidersSize, SlidersTmp } from '../components/Sliders';
import { Window } from '../components/Window';
import { projects } from '../data/projects';
import { getLocalizedText, uiCopy } from '../data/copy';

const DEFAULTS = {
  quantity: 800,
  duration: 1,
  size: 2,
  color: 5,
};

function randomRange() {
  const sign = Math.random() < 0.5 ? -1 : 1;
  return sign * (Math.random() * 0.75 + 0.75);
}

function createBackgroundStar({ size, duration, color }) {
  const x = (Math.random() * 100).toFixed(2);
  const y = (Math.random() * 100).toFixed(2);

  const hueSeed = Math.round(Math.random() * 355);
  let hue = hueSeed;
  if (color !== 10 && ((hueSeed >= 75 && hueSeed <= 210) || (hueSeed >= 225 && hueSeed <= 240))) {
    hue = Math.round(Math.random() * 75);
  }

  const saturation = Math.round(Math.random() * (color * 10));
  const lightness = Math.random() * 2 - 1 >= 0.9 ? 100 : Math.round(Math.random() * 90);
  const animationDuration = Math.random() * 2 - 1 >= 0.9 ? +(duration * (Math.random() * 1 + 3)).toFixed(1) : +(duration * (Math.random() + 1)).toFixed(1);
  const starSize = Math.random() * 2 - 1 >= 0.5 ? +(size * (Math.random() + 2)).toFixed(1) : +(size * (Math.random() + 1)).toFixed(1);
  const flash = Math.random() * 2 - 1 >= 0.5 ? +(Math.random() * 0.3 + 0.7).toFixed(1) : +((Math.random() * 0.4 - 0.15) + 0.15).toFixed(1);

  const step = () => (+((Math.random() * 2) - 1).toFixed(1)).toString();

  return {
    x,
    y,
    hue,
    saturation,
    lightness,
    animationDuration,
    starSize,
    flash,
    x1: step(),
    x2: step(),
    x3: step(),
    x4: step(),
    x5: step(),
    x6: step(),
  };
}

function createProjectStar(project, index, onHover, lang) {
  const wrapper = document.createElement('button');
  wrapper.type = 'button';
  wrapper.className = 'interactive-star';
  const initialLeft = 16 + index * 27 + Math.random() * 8;
  const initialTop = 18 + Math.random() * 58;
  wrapper.style.left = `${initialLeft}%`;
  wrapper.style.top = `${initialTop}%`;
  wrapper.style.setProperty('--x1', `${(Math.random() * 2 - 1).toFixed(1)}px`);
  wrapper.style.setProperty('--x2', `${(Math.random() * 2 - 1).toFixed(1)}px`);
  wrapper.style.setProperty('--x5', `${(Math.random() * 2 - 1).toFixed(1)}px`);
  wrapper.style.setProperty('--x6', `${(Math.random() * 2 - 1).toFixed(1)}px`);
  wrapper.style.setProperty('--x9', `${(Math.random() * 2 - 1).toFixed(1)}px`);
  wrapper.style.setProperty('--x10', `${(Math.random() * 2 - 1).toFixed(1)}px`);
  const projectName = project.name[lang] || project.name.en;
  wrapper.setAttribute('aria-label', `${getLocalizedText(lang, 'openProject')} ${projectName}`);
  wrapper.dataset.href = project.link;
  wrapper.dataset.dragging = 'false';
  wrapper.dataset.moved = 'false';

  const image = document.createElement('img');
  image.className = 'interactive-star__image';
  image.src = project.image;
  image.alt = projectName;
  image.loading = 'lazy';
  image.draggable = false;
  image.addEventListener('dragstart', (event) => event.preventDefault());
  wrapper.appendChild(image);

  const glow = document.createElement('div');
  glow.className = 'earth';
  glow.style.left = `${index * 6 + randomRange() * 4}%`;
  glow.style.top = `${index * 6 + randomRange() * 4}%`;

  wrapper.addEventListener('mouseenter', () => onHover(project));
  wrapper.addEventListener('focus', () => onHover(project));

  let pointerStart = null;
  let startLeft = initialLeft;
  let startTop = initialTop;
  let launchTimer = null;

  const stopDragging = () => {
    wrapper.dataset.dragging = 'false';
  };

  const launchProject = () => {
    if (launchTimer) return;
    wrapper.classList.add('interactive-star--launching');
    launchTimer = window.setTimeout(() => {
      window.location.assign(project.link);
    }, 260);
  };

  wrapper.addEventListener('pointerdown', (event) => {
    if (event.button !== 0) return;
    pointerStart = { x: event.clientX, y: event.clientY };
    startLeft = Number.parseFloat(wrapper.style.left);
    startTop = Number.parseFloat(wrapper.style.top);
    wrapper.dataset.dragging = 'false';
    wrapper.dataset.moved = 'false';
    wrapper.setPointerCapture?.(event.pointerId);
    onHover(project);
  });

  wrapper.addEventListener('pointermove', (event) => {
    if (!pointerStart) return;
    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 5) {
      wrapper.dataset.dragging = 'true';
      wrapper.dataset.moved = 'true';
    }

    if (wrapper.dataset.dragging === 'true') {
      const parent = wrapper.parentElement;
      const bounds = parent?.getBoundingClientRect();
      if (!bounds) return;
      const nextLeft = Math.max(0, Math.min(100, startLeft + (deltaX / bounds.width) * 100));
      const nextTop = Math.max(0, Math.min(100, startTop + (deltaY / bounds.height) * 100));
      wrapper.style.left = `${nextLeft}%`;
      wrapper.style.top = `${nextTop}%`;
      wrapper.classList.add('interactive-star--dragging');
    }
  });

  wrapper.addEventListener('pointerup', (event) => {
    if (pointerStart && wrapper.dataset.dragging !== 'true') {
      launchProject();
    }
    pointerStart = null;
    wrapper.classList.remove('interactive-star--dragging');
    stopDragging();
    wrapper.releasePointerCapture?.(event.pointerId);
  });

  wrapper.addEventListener('pointercancel', () => {
    pointerStart = null;
    wrapper.classList.remove('interactive-star--dragging');
    stopDragging();
  });

  return { star: wrapper, glow };
}

const App = () => {
  const starContainer = useRef(null);
  const projectContainer = useRef(null);

  const [fps, setFps] = useState(0);
  const [quantity, setQuantity] = useState(DEFAULTS.quantity);
  const [duration, setDuration] = useState(DEFAULTS.duration);
  const [size, setSize] = useState(DEFAULTS.size);
  const [color, setColor] = useState(DEFAULTS.color);
  const [aboutCollapsed, setAboutCollapsed] = useState(true);
  const [controlsCollapsed, setControlsCollapsed] = useState(true);
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [lang, setLang] = useState('en');

  const copy = uiCopy[lang];

  const registerProjectHover = useCallback((project) => {
    setActiveProject(project);
  }, []);

  useEffect(() => {
    const container = starContainer.current;
    if (!container) return undefined;

    container.replaceChildren();

    let active = true;

    const addStar = (starData) => {
      const star = document.createElement('div');
      star.className = 'Star';
      star.style.height = `${starData.starSize}px`;
      star.style.width = `${starData.starSize}px`;
      star.style.left = `${starData.x}vw`;
      star.style.top = `${starData.y}vh`;
      star.style.animationDuration = `${starData.animationDuration}s`;
      star.style.backgroundColor = `hsl(${starData.hue}, ${starData.saturation}%, ${starData.lightness}%)`;
      star.style.setProperty('--flash', starData.flash);
      star.style.setProperty('--opac', 0);
      star.style.setProperty('--x1', `${starData.x1}px`);
      star.style.setProperty('--x2', `${starData.x2}px`);
      star.style.setProperty('--x3', `${starData.x3}px`);
      star.style.setProperty('--x4', `${starData.x4}px`);
      star.style.setProperty('--x5', `${starData.x5}px`);
      star.style.setProperty('--x6', `${starData.x6}px`);

      const handleAnimationEnd = () => {
        if (!active) return;
        star.remove();
        addStar(createBackgroundStar({ size, duration, color }));
      };

      star.addEventListener('animationend', handleAnimationEnd);
      container.appendChild(star);
    };

    for (let index = 0; index < quantity; index += 1) {
      addStar(createBackgroundStar({ size, duration, color }));
    }

    return () => {
      active = false;
      container.replaceChildren();
    };
  }, [quantity, duration, size, color]);

  useEffect(() => {
    const container = projectContainer.current;
    if (!container) return undefined;

    container.replaceChildren();

    const nodes = projects.flatMap((project, index) => {
      const { star, glow } = createProjectStar(project, index, registerProjectHover, lang);
      return [star, glow];
    });

    container.append(...nodes);

    return () => {
      container.replaceChildren();
    };
  }, [registerProjectHover, lang]);

  useEffect(() => {
    let frame = 0;
    let lastFpsUpdate = performance.now();
    let frames = 0;

    const loop = (now) => {
      frames += 1;
      if (now - lastFpsUpdate > 500) {
        setFps(Math.round((frames * 1000) / (now - lastFpsUpdate)));
        frames = 0;
        lastFpsUpdate = now;
      }
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="App">
      <div className="ambient-glow" />
      <button
        type="button"
        className="language-toggle"
        onClick={() => setLang((current) => (current === 'en' ? 'ptBr' : 'en'))}
        aria-label={copy.languageLabel}
      >
        <span className="language-toggle__flag">⚑</span>
        <span>{lang === 'en' ? 'EN' : 'PT-BR'}</span>
      </button>
      <div id="starfield" ref={starContainer} />
      <div id="starfieldint" ref={projectContainer} />

      <Window
        title={copy.controlsTitle}
        subtitle={copy.controlsSubtitle}
        collapsed={controlsCollapsed}
        onToggleCollapse={() => setControlsCollapsed((value) => !value)}
        initialPosition={{ x: 120, y: 96 }}
        className="window--controls"
      >
        <div className="sliders-panel">
          <SlidersSize value={size} label={copy.size} onChange={(value) => setSize(Number(value))} />
          <SlidersColor value={color} label={copy.color} onChange={(value) => setColor(Number(value))} />
          <SlidersTmp value={duration} label={copy.duration} onChange={(value) => setDuration(Number(value))} />
          <SlidersQtd value={quantity} label={copy.quantity} onChange={(value) => setQuantity(Number(value))} />
          <p className="fps-readout">{copy.fps}: {fps}</p>
          <a className="repo-link" href="https://github.com/naranjii/star-edit-ui" target="_blank" rel="noopener noreferrer">
            <span>{copy.repoLabel}</span>
            <span>naranjii/star-edit-ui</span>
          </a>
        </div>
      </Window>

      <Window
        title={copy.aboutTitle}
        subtitle={copy.aboutSubtitle}
        collapsed={aboutCollapsed}
        onToggleCollapse={() => setAboutCollapsed((value) => !value)}
        initialPosition={{ x: 520, y: 108 }}
        className="window--about"
      >
        <div className="about-panel">
          <p>{copy.aboutIntro}</p>

          {activeProject ? (
            <article className="project-preview">
              <img src={activeProject.image} alt={activeProject.name[lang]} className="project-preview__image" />
              <div>
                <h3>{activeProject.name[lang]}</h3>
                <p>{activeProject.blurb[lang]}</p>
              </div>
            </article>
          ) : null}

          <div className="projects-list">
            <span>{copy.projectsLabel}</span>
            <ul>
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    type="button"
                    className="projects-list__item"
                    onClick={() => registerProjectHover(project)}
                  >
                    {project.name[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Window>
    </div>
  );
};

export default App;
