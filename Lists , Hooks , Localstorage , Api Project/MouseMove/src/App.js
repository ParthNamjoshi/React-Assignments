import React from "react";
import { useMousePosition } from "./useMousePosition";
import MouseTracker from './MouseTracker'; // Adjust the path as needed

const App = () => {
  const position = useMousePosition();

  return (
    <div>
      {position.x}:{position.y}
      <MouseTracker />
    </div>
  );
};

export default App;