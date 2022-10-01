import { useState } from "react";
import { useStore } from "../hooks/useStore";

export default function Menu() {
  const [isHidden, setIsHidden] = useState(false);
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  return (
    <div className='menu absolute'>
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show Controls" : "Hide Controls"}
      </button>
      <div className={`${isHidden ? "hidden" : ""}`}>
        <div>
          <p>Version: 0.1.22 Alpha</p>
        </div>
        <div>
          <p>Controls:</p>
          <ul>
            <li>W: Move Forward</li>
            <li>A: Move Left</li>
            <li>S: Move Backward</li>
            <li>D: Move Right</li>
            <li>Space: Jump</li>
            <li>Click: Place a block</li>
            <li>Alt + Click: Remove a block</li>
            <li>Digits 1-7: Select block</li>
          </ul>
          <button onClick={saveWorld}>Save World</button>
          <br />
          <button onClick={resetWorld}>Reset World</button>
        </div>
      </div>
    </div>
  );
}
