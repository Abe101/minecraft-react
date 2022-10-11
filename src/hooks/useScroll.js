import { useCallback, useEffect, useState } from "react";
import cubes from "../gameComponents/Cubes";

export const useScroll = () => {
  const [pointer, setPointer] = useState(0);

  const itemNames = Object.keys(cubes);

  const handleScroll = useCallback((event) => {
    switch (event.deltaY > 0) {
      case true:
        if (pointer >= itemNames.length - 1) {
          setPointer(0);
        } else {
          setPointer(pointer + 1);
        }
        break;
      default:
        if (pointer <= 0) {
          setPointer(itemNames.length - 1);
        } else {
          setPointer(pointer - 1);
        }
        break;
    }
  });

  useEffect(() => {
    document.addEventListener("wheel", handleScroll);

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return itemNames[pointer];
};
