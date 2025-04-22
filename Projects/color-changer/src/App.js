// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [color, setColor] = useState('#ffffff');

  // Expanded array of colors
  const colors = [
    '#FF5733', // Red
    '#33FF57', // Green
    '#3357FF', // Blue
    '#F1C40F', // Yellow
    '#8E44AD', // Purple
    '#E74C3C', // Dark Red
    '#1ABC9C', // Turquoise
    '#3498DB', // Light Blue
    '#9B59B6', // Amethyst
    '#2ECC71', // Emerald
    '#E67E22', // Carrot
    '#F39C12', // Orange
    '#D35400', // Pumpkin
    '#C0392B', // Alizarin
    '#7F8C8D', // Concrete
    '#34495E', // Midnight Blue
    '#2980B9', // Bright Blue
    '#16A085', // Green Sea
    '#F39C12', // Orange
    '#D35400', // Pumpkin
    '#C0392B', // Alizarin
  ];

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1>Color Changer App</h1>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default App;