import React from 'react';
import { useMousePosition } from './useMousePosition'; // Adjust the path as needed
import './MouseTracker.css'; // Create this CSS file for styling

const MouseTracker = () => {
  const { x, y } = useMousePosition();

  return (
    <div className="mouse-tracker-container">
      <div
        className="mouse-tracker-circle"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      ></div>
    </div>
  );
};

export default MouseTracker;
