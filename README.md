# ✨ Star Editor – Interactive Starfield Visualizer

[![Live on Vercel](https://img.shields.io/badge/Vercel-Live-blue?logo=vercel)](https://starfields.vercel.app)
[![Made with React](https://img.shields.io/badge/React-JSX-blue?logo=react)](https://reactjs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

![Star Editor Preview](./5a8b4ece-30a5-4fa4-b085-241faa7e37ec.png)

## 🎯 About

**Star Editor** is a parameterizable starfield visualizer created as a personal experiment to learn **JSX-based CSS manipulation**. It focuses on providing a clean, reactive UI that visually responds to user input.

🔗 Live Demo: [https://starfields.vercel.app](https://starfields.vercel.app)  
📦 Repository: [github.com/naranjii/starfields](https://github.com/naranjii/starfields)

---

## 🛠 Features

- Adjustable **star size**, **quantity**, **color variation**, and **light delay** using sliders
- Clean, minimalist UI
- Reactive rendering of stars via dynamic `div` elements

![Screenshot](./58d6e2d2-e824-4692-afbb-8b4559f29b1e.png)

---

## 📚 Purpose

This was originally meant to be my **portfolio homepage**, where the **brightest stars** would act as **interactive links** to sections like projects, about, and contact.

However, I discovered that rendering a high number of animated `div` elements can lead to performance bottlenecks — especially on low-end devices. For better results in future iterations, GPU-accelerated rendering through specialized libraries is highly recommended:

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
npm run dev

Star Editor é um visualizador de estrelas parametrizável criado como experimento pessoal para aprender manipulação de CSS via JSX. A proposta é uma UI limpa com efeitos visuais responsivos.

🔗 Acesse: https://starfields.vercel.app
📦 Código-fonte: github.com/naranjii/starfields

🎨 Recursos
Controle de tamanho, quantidade, variação de cor e atraso de brilho

Interface minimalista e reativa

Renderização de estrelas com elementos div e CSS dinâmico

🎯 Objetivo
Esse projeto começou como uma homepage de portfólio, onde estrelas brilhantes seriam links interativos para seções do site.

Mas, ao renderizar muitas divs com animações CSS, a performance caiu. Futuras versões podem usar bibliotecas com aceleração gráfica como:

Three.js

PixiJS

Canvas API

⚙️ Tecnologias
React + JSX

CSS

Vercel (Deploy)

📦 Rodar Localmente
git clone https://github.com/naranjii/starfields.git
cd starfields
npm install
npm run dev
