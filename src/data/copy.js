export const uiCopy = {
  en: {
    controlsTitle: '✦ Star Edit UI ✦',
    controlsSubtitle: 'Tune the field, keep the sparkle.',
    aboutTitle: 'About',
    aboutSubtitle: 'Hovered project, recent signals, and context.',
    aboutIntro:
      'I built this as a side project while learning JavaScript and experimenting with animated UI systems. It keeps the original starfield feel, but now the structure is easier to extend and maintain.',
    recentLabel: 'Last hovered',
    projectsLabel: 'Projects',
    repoLabel: 'GitHub',
    languageLabel: 'Language',
    openProject: 'Open project',
    expand: '+',
    collapse: '-',
    size: 'Star Size',
    color: 'Color Variation',
    duration: 'Duration',
    quantity: 'Quantity',
    fps: 'FPS',
    projectTitle: 'Project',
    projectLink: 'Open project',
  },
  ptBr: {
    controlsTitle: '✦ Star Edit UI ✦',
    controlsSubtitle: 'Ajuste o campo e mantenha o brilho.',
    aboutTitle: 'Sobre',
    aboutSubtitle: 'Projeto em destaque, sinais recentes e contexto.',
    aboutIntro:
      'Criei este projeto como um side project enquanto aprendia JavaScript e experimentava sistemas de UI animados. Ele mantém a sensação de campo estelar original, mas agora está mais fácil de expandir e manter.',
    recentLabel: 'Últimos hover',
    projectsLabel: 'Projetos',
    repoLabel: 'GitHub',
    languageLabel: 'Idioma',
    openProject: 'Abrir projeto',
    expand: '+',
    collapse: '-',
    size: 'Tamanho da estrela',
    color: 'Variação de cor',
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
