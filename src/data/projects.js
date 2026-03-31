import stmImage from '../assets/screenshots/stm.jpg';
import lettrickImage from '../assets/screenshots/lettrick.jpg';

export const projects = [
  {
    id: 'stm',
    name: {
      en: 'Starred Task Manager',
      ptBr: 'Gerenciador de Tarefas Estrelado',
    },
    link: 'https://starred-task-manager.vercel.app',
    image: stmImage,
    blurb: {
      en: 'Task system with a bright, star-led interaction theme.',
      ptBr: 'Sistema de tarefas com uma interação guiada por estrelas.',
    },
  },
  {
    id: 'lettrick',
    name: {
      en: 'Lettrick',
      ptBr: 'Lettrick',
    },
    link: 'https://lettrick.vercel.app',
    image: lettrickImage,
    blurb: {
      en: 'A kinetic wordplay project with a playful visual system.',
      ptBr: 'Um projeto tipográfico com um sistema visual brincalhão.',
    },
  },
];
