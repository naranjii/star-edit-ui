import React, { useRef, forwardRef  } from "react";

export const RangeInput = forwardRef(({ onChange, min, max, step, defaultValue }, ref) => {
  return (
    <div className="sliders">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        ref={ref}
        onInput={onChange}
      />
    </div>
  );
});

export function SlidersQtd({ onSliderChange_qtd }) {                   // QUANTIDADE
  const refqtdEstrelas = useRef(null);
  const handleChange = () => {
    const value = refqtdEstrelas.current.value;
    onSliderChange_qtd(value);
  };


  return (
    <RangeInput
      ref={refqtdEstrelas}
      onChange={handleChange}
      min="0"
      max="2000"
      step="100"
      defaultValue="800" />
  );
}

export function SlidersTmp({ onSliderChange_tmp }) {                  // TEMPO DE ANIMAÇÃO
  const reftmpEstrelas = useRef(null);
  const handleChange = () => {
    const tmpvalue = reftmpEstrelas.current.value;
    onSliderChange_tmp(tmpvalue);
  };
  return (
    <RangeInput ref={reftmpEstrelas} onChange={handleChange} min="0.5" max="8" step="0.5" defaultValue="1" />
  );
}

export function SlidersSize({ onSliderChange_size }) {                  // TAMANHO
  const refsizeEstrelas = useRef(null);
  const handleChange = () => {
    const sizevalue = refsizeEstrelas.current.value;
    onSliderChange_size(sizevalue);
  };
  return (
    <RangeInput ref={refsizeEstrelas} onChange={handleChange} min="0.5" max="10" step="0.5" defaultValue="2" />
  );
}


export function SlidersColor({ onSliderChange_color }) {                  // COR
  const refcolorEstrelas = useRef(null);
  const handleChange = () => {
    const colorvalue = refcolorEstrelas.current.value;
    onSliderChange_color(colorvalue);
  };
  return (

    <RangeInput ref={refcolorEstrelas} onChange={handleChange} min="1" max="10" step="0.5" defaultValue="5" />

  );
}

export function makeElementDraggable(headerId, containerId) {
  const header = document.getElementById(headerId);
  const container = document.getElementById(containerId);
  let offsetX = 0, offsetY = 0, initialX = 0, initialY = 0;

  const onMouseDown = (e) => {
    e.preventDefault();
    initialX = e.clientX - container.offsetLeft;
    initialY = e.clientY - container.offsetTop;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (e) => {
    offsetX = e.clientX - initialX;
    offsetY = e.clientY - initialY;
    container.style.top = `${offsetY}px`;
    container.style.left = `${offsetX}px`;
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  if (header) {
    header.addEventListener('mousedown', onMouseDown);
  }
}