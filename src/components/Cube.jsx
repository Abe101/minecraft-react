import { useBox } from "@react-three/cannon";
import { useState } from "react";
import { useDispatch } from "react-redux";

import * as textures from "../assets/textures";
import { addCube, removeCube } from "../store/slices/cubeSlice";

export default function Cube({ position, texture }) {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];

  return (
    <mesh
      ref={ref}
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          dispatch(removeCube({ X: x, Y: y, Z: z }));
          return;
        }
        switch (clickedFace) {
          case 0:
            dispatch(addCube({ X: x + 0.5, Y: y, Z: z }));
            return;
          case 1:
            dispatch(addCube({ X: x - 0.5, Y: y, Z: z }));
            return;
          case 2:
            dispatch(addCube({ X: x, Y: y + 0.5, Z: z }));
            return;
          case 3:
            dispatch(addCube({ X: x, Y: y - 0.5, Z: z }));
            return;
          case 4:
            dispatch(addCube({ X: x, Y: y, Z: z + 0.5 }));
            return;
          case 5:
            dispatch(addCube({ X: x, Y: y, Z: z - 0.5 }));
            return;
          default:
            return;
        }
      }}
    >
      <boxGeometry attach="geometry" args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={activeTexture}
        transparent={true}
        attach="material"
      />
    </mesh>
  );
}
