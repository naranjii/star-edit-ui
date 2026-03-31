export const uiCopy = {
  en: {
    controlsTitle: '✦Star Edit UI✦',
    controlsSubtitle: 'Tune the field',
    aboutTitle: 'ABOUT LARANJEIRA, M.',
    aboutSubtitle: '',
    aboutIntro:
      'This website is my first attempt at learning JavaScript and experimenting with animated UI systems. It keeps the original starfield feel, heavily spawning thousands of CSS stiled HTML components, but the overall structure has been refactored to ease extension and maintainance.',
    recentLabel: 'Last hovered',
    projectsLabel: 'Projects',
    repoLabel: 'GitHub',
    languageLabel: 'Language',
    openProject: 'Open project',
    expand: '+',
    collapse: '-',
    size: 'Size',
    color: 'Color',
    duration: 'Duration',
    quantity: 'Quantity',
    fps: 'FPS',
    projectTitle: 'Project',
    projectLink: 'Open project',
  },
  ptBr: {
    controlsTitle: '✦Star Edit UI✦',
    controlsSubtitle: 'Ajuste o campo e mantenha o brilho.',
    aboutTitle: 'Sobre',
    aboutSubtitle: 'Projeto em destaque, sinais recentes e contexto.',
    aboutIntro:
      'Esse website é o resultado da minha primeira tentativa em aprenderJavaScript e experimentar com sistemas de interface animada. O código no repositório mantém o método antigo para gerar os componentes e produzir a animação, ignorando as soluções gráficas ideais como WebGL ou threejs. A estrutura como um todo porém foi refatorada para facilitar extensão e manutenção.',
    recentLabel: 'Vistos Recentemente',
    projectsLabel: 'Projetos',
    repoLabel: 'GitHub',
    languageLabel: 'Idioma',
    openProject: 'Abrir projeto',
    expand: '+',
    collapse: '-',
    size: 'Tamanho',
    color: 'Cor',
    duration: 'Duração',
    quantity: 'Quantidade',
    fps: 'FPS',
    projectTitle: 'Projeto',
    projectLink: 'Abrir projeto',
  },
};

export function getLocalizedText(lang, key) {
  return uiCopy[lang]?.[key] ?? uiCopy.en[key] ?? '';
}
