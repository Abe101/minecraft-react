import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
  cobblestoneImg,
  strippedLogImg,
} from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";

import { setTexture } from "../store/slices/cubeSlice";

const images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
  strippedLog: strippedLogImg,
  cobblestone: cobblestoneImg,
};

export default function TextureSelector() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const activeTexture = useSelector((state) => state.cubes.texture);
  const { dirt, grass, glass, log, wood, cobblestone, strippedLog } =
    useKeyboard();

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
    const pressedTexture = Object.entries(textures).find(([_, v]) => v);
    if (pressedTexture) {
      dispatch(setTexture(pressedTexture[0]));
    }
  }, [dirt, grass, glass, log, wood, cobblestone, strippedLog, setTexture]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 500);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  return (
    visible && (
      <div className='absolute top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] scale-[5]'>
        {Object.entries(images).map(([k, src]) => (
          <img
            key={k}
            src={src}
            alt={k}
            className={`${
              k === activeTexture ? "border border-solid border-red-600" : ""
            }`}
          />
        ))}
      </div>
    )
  );
}
