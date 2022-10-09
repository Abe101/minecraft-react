import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import {
  dirtBlock,
  grassBlock,
  glassBlock,
  logBlock,
  strippedLogBlock,
  woodBlock,
  cobblestoneBlock,
} from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";

import { setTexture } from "../store/slices/cubeSlice";

const images = {
  dirt: dirtBlock,
  grass: grassBlock,
  glass: glassBlock,
  wood: woodBlock,
  log: logBlock,
  strippedLog: strippedLogBlock,
  cobblestone: cobblestoneBlock,
};

export default function TextureSelector() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const activeTexture = useSelector((state) => state.cubes.texture);
  const [activeTextureName, setActiveTextureName] = useState("");
  const { dirt, grass, glass, log, wood, cobblestone, strippedLog } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      log,
      wood,
      cobblestone,
      strippedLog,
    };
    const pressedTexture = Object.entries(textures).find(([, v]) => v);
    if (pressedTexture) {
      dispatch(setTexture(pressedTexture[0]));

      switch (pressedTexture[0]) {
        case "dirt":
          setActiveTextureName("Dirt");
          break;
        case "grass":
          setActiveTextureName("Grass");
          break;
        case "glass":
          setActiveTextureName("Glass");
          break;
        case "log":
          setActiveTextureName("Log");
          break;
        case "wood":
          setActiveTextureName("Wood");
          break;
        case "cobblestone":
          setActiveTextureName("Cobblestone");
          break;
        case "strippedLog":
          setActiveTextureName("Stripped Log");
          break;
        default:
          setActiveTextureName("");
          break;
      }
    }
  }, [dirt, grass, glass, log, wood, cobblestone, strippedLog, setTexture]);

  console.log("activeTextureName", activeTextureName);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 1000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className="absolute top-[50%] right-[50%] translate-x-[25%] translate-y-[450%] scale-[5]">
        <div>
          <p className="text-[4px] h-2 m-2">{activeTextureName}</p>
        </div>
        <div className="grid grid-cols-7 bg-slate-500 border border-zinc-800 rounded-sm">
          {Object.entries(images).map(([k, src]) => (
            <>
              <img
                key={k}
                src={src}
                alt={k}
                className={`bg-slate-300 w-3 h-3 border-t-[0.2px] border-b-[0.2px] border-r-[0.05px] border-l-[0.05px] border-slate-500 rounded-sm ${
                  k === activeTexture ? "scale-125" : ""
                }`}
              />
            </>
          ))}
        </div>
      </div>
    )
  );
}
