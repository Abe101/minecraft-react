import { useState } from "react";
import { useDispatch } from "react-redux";

import { saveCubes, resetCubes } from "../store/slices/cubeSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="absolute top-3 left-3 bg-slate-400 rounded-lg p-1 m-1">
      <button
        className="bg-zinc-900 rounded-lg p-1 opacity-70 hover:opacity-100 hover:transition-opacity m-1"
        onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show Controls" : "Hide Controls"}
      </button>
      <div className={`${isHidden ? "hidden transition-all" : ""}`}>
        <div className="mx-1">
          <p>
            <span className="font-bold">Version</span>: 0.1.24 Alpha
          </p>
          <p>
            <span className="font-bold">Controls</span>:
          </p>
          <ul>
            <li>WASD: Movement</li>
            <li>Space: Jump</li>
            <li>Click: Place a block</li>
            <li>Alt + Click: Remove a block</li>
            <li>Digits 1-7: Select block</li>
          </ul>
        </div>
        <div>
          <div className="flex flex-row gap-1">
            <button
              className="bg-zinc-900 rounded-lg p-1 opacity-70 hover:opacity-100 hover:transition-opacity m-1"
              onClick={() => dispatch(saveCubes())}>
              Save
            </button>
            <br />
            <button
              className="bg-zinc-900 rounded-lg p-1 opacity-70 hover:opacity-100 hover:transition-opacity m-1"
              onClick={() => dispatch(resetCubes())}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
