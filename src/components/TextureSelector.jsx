import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useScroll } from "../hooks/useScroll";
import {
  dirtBlock,
  grassBlock,
  glassBlock,
  logBlock,
  strippedLogBlock,
  woodBlock,
  cobblestoneBlock,
  blackWoolBlock,
  whiteWoolBlock,
  blueWoolBlock,
  brownWoolBlock,
  cyanWoolBlock,
  grayWoolBlock,
  greenWoolBlock,
  lightBlueWoolBlock,
  lightGrayWoolBlock,
  limeWoolBlock,
  magentaWoolBlock,
  orangeWoolBlock,
  pinkWoolBlock,
  purpleWoolBlock,
  redWoolBlock,
  yellowWoolBlock,
} from "../assets/assets";
import { setTexture } from "../store/slices/cubeSlice";

const images = {
  dirt: dirtBlock,
  grass: grassBlock,
  glass: glassBlock,
  wood: woodBlock,
  log: logBlock,
  strippedLog: strippedLogBlock,
  cobblestone: cobblestoneBlock,
  blackWool: blackWoolBlock,
  whiteWool: whiteWoolBlock,
  blueWool: blueWoolBlock,
  brownWool: brownWoolBlock,
  cyanWool: cyanWoolBlock,
  grayWool: grayWoolBlock,
  greenWool: greenWoolBlock,
  lightBlueWool: lightBlueWoolBlock,
  lightGrayWool: lightGrayWoolBlock,
  limeWool: limeWoolBlock,
  magentaWool: magentaWoolBlock,
  orangeWool: orangeWoolBlock,
  pinkWool: pinkWoolBlock,
  purpleWool: purpleWoolBlock,
  redWool: redWoolBlock,
  yellowWool: yellowWoolBlock,
};

export default function TextureSelector() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const activeTexture = useSelector((state) => state.cubes.texture);
  const texture = useScroll();
  const activeTextureName = texture.toUpperCase();

  useEffect(() => {
    dispatch(setTexture(texture));
  }, [texture, setTexture]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 1000);
    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [activeTexture]);

  console.log(visible, activeTexture);

  return (
    visible && (
      <div className="absolute top-[50%] right-[50%] translate-x-[25%] translate-y-[150%] scale-[5]">
        <div>
          <p className="text-[4px] h-2 m-2">{activeTextureName}</p>
        </div>
        <div className="grid grid-cols-9 bg-slate-500 border border-zinc-800 rounded-sm">
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
