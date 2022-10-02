import { useState } from "react";
import { useDispatch } from "react-redux";

import { saveCubes, resetCubes } from "../store/slices/cubeSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="absolute top-3 left-3">
      <button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show Controls" : "Hide Controls"}
      </button>
      <div className={`${isHidden ? "hidden" : ""}`}>
        <div>
          <p>Version: 0.1.24 Alpha</p>
        </div>
        <div>
          <p>Controls:</p>
          <ul>
            <li>WASD: Movement</li>
            <li>Space: Jump</li>
            <li>Click: Place a block</li>
            <li>Alt + Click: Remove a block</li>
            <li>Digits 1-7: Select block</li>
          </ul>
          <button onClick={() => dispatch(saveCubes())}>Save</button>
          <br />
          <button onClick={() => dispatch(resetCubes())}>Reset</button>
        </div>
      </div>
    </div>
  );
}
