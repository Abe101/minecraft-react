import { useEffect, useState } from "react";
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import { dirtImg, grassImg, glassImg, woodImg, logImg, cobblestoneImg, strippedLogImg } from "../assets/assets";

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
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, log, wood, cobblestone, strippedLog } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      log,
      wood,
      cobblestone,
      strippedLog
    };
    const pressedTexture = Object.entries(textures).find(([k, v]) => v);
    if (pressedTexture) {
      setTexture(pressedTexture[0]);
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
      <div className='absolute centered texture-selector'>
        {Object.entries(images).map(([k, src]) => (
          <img
            key={k}
            src={src}
            alt={k}
            className={`${k === activeTexture ? "active" : ""}`}
          />
        ))}
      </div>
    )
  );
}
