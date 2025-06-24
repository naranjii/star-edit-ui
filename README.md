# ✨ Star Edit UI – Interactive Starfield Visualizer
[![Live on Vercel](https://img.shields.io/badge/Vercel-Live-blue?logo=vercel)](https://starfields.vercel.app)
[![Made with React](https://img.shields.io/badge/React-JSX-blue?logo=react)](https://reactjs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)


<img src="https://github.com/user-attachments/assets/b3da99dc-0f12-4bb1-9148-f8fe2929491a" height="320" width="690">


## 🎯 About

**Star Edit UI** is a parameterizable starfield visualizer created as a personal experiment to learn **JSX-based CSS manipulation**. It focuses on providing a clean, reactive UI that visually responds to user input.

🔗 Live Demo: [https://starfields.vercel.app](https://starfields.vercel.app)  
📦 Repository: [github.com/naranjii/starfields](https://github.com/naranjii/starfields)

---

## 🛠 Features

- Adjustable **star size**, **quantity**, **color variation**, and **light delay** using sliders
- Clean, minimalist UI
- Reactive rendering of stars via dynamic `div` elements

---

## 📚 Purpose

This was originally meant to be my **portfolio homepage**, where the **brightest stars** would act as **interactive links** to sections like projects, about, and contact.

However, I discovered that rendering a high number of animated `div` elements leads to performance bottlenecks — especially on low-end devices. For better results in future iterations, GPU-accelerated rendering through specialized libraries is thw way to go:

- 🧱 [Three.js](https://threejs.org/) – for 3D / WebGL rendering
- 🌌 [PixiJS](https://pixijs.com/) – fast 2D graphics rendering
- ⚡ [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) – efficient pixel-level control without DOM overhead

---

## 🧪 Tech Stack

- **React**
- **JSX**
- **CSS**
- **Vercel** for deployment

---

## 🚀 Running Locally

```bash
git clone https://github.com/naranjii/starfields.git
cd starfields
npm install
npm run start
```

---
## 🗣 🇧🇷 PT-BR
## 🎯 Sobre

**Star Edit UI** é um visualizador de campo estelar parametrizável, criado como um experimento pessoal para aprender **manipulação de CSS com JSX**. O foco é oferecer uma interface limpa e reativa que responde visualmente aos ajustes do usuário.

🔗 Demo ao vivo: [https://starfields.vercel.app](https://starfields.vercel.app)  
📦 Repositório: [github.com/naranjii/starfields](https://github.com/naranjii/starfields)

---

## 🛠 Funcionalidades

- Controle ajustável de **tamanho das estrelas**, **quantidade**, **variação de cor** e **atraso de luz** com sliders
- Interface limpa e minimalista
- Renderização reativa das estrelas usando elementos `div` dinâmicos

---

## 📚 Objetivo

Inicialmente, este projeto foi idealizado como minha **página inicial de portfólio**, onde as **estrelas mais brilhantes** funcionariam como **links interativos** para seções como projetos, sobre e contato.

No entanto, descobri que renderizar um grande número de elementos `div` animados pode causar gargalos de desempenho — especialmente em dispositivos mais simples. Para resultados melhores em versões futuras, o indicado é substituir pelo uso de renderização acelerada por GPU com bibliotecas especializadas:

- 🧱 [Three.js](https://threejs.org/) – para renderização 3D / WebGL
- 🌌 [PixiJS](https://pixijs.com/) – renderização 2D de alta performance
- ⚡ [Canvas API](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API) – controle eficiente de pixels sem sobrecarga do DOM

---

## 🧪 Tecnologias Utilizadas

- **React**
- **JSX**
- **CSS**
- **Vercel** para deploy

---

## 🚀 Rodando Localmente

```bash
git clone https://github.com/naranjii/starfields.git
cd starfields
npm install
npm run start

