import React from 'react';

function SliderRow({ label, value, min, max, step, onChange }) {
  return (
    <label className="slider-row">
      <span className="slider-row__label">
        {label}: <strong>{value}</strong>
      </span>
      <input
        className="slider-row__input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export function SlidersQtd({ value, label = 'Quantity', onChange }) {
  return <SliderRow label={label} value={value} min={0} max={3000} step={100} onChange={onChange} />;
}

export function SlidersTmp({ value, label = 'Duration', onChange }) {
  return <SliderRow label={label} value={value} min={1} max={10} step={0.5} onChange={onChange} />;
}

export function SlidersSize({ value, label = 'Star Size', onChange }) {
  return <SliderRow label={label} value={value} min={0.5} max={10} step={0.5} onChange={onChange} />;
}

export function SlidersColor({ value, label = 'Color Variation', onChange }) {
  return <SliderRow label={label} value={value} min={1} max={10} step={0.5} onChange={onChange} />;
}
