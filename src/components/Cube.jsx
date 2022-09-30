import { useBox } from "@react-three/cannon";
import { useState } from "react";
import * as textures from "../assets/textures";
import { useStore } from "../hooks/useStore";

export default function Cube({ position, texture }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);
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
          removeCube(x, y, z);
          return;
        }
        switch (clickedFace) {
          case 0:
            addCube(x + 1, y, z);
            return;
          case 1:
            addCube(x - 1, y, z);
            return;
          case 2:
            addCube(x, y + 1, z);
            return;
          case 3:
            addCube(x, y - 1, z);
            return;
          case 4:
            addCube(x, y, z + 1);
            return;
          case 5:
            addCube(x - 1, y, z - 1);
            return;
          default:
            return;
        }
      }}
    >
      <boxGeometry attach='geometry' />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={activeTexture}
        transparent={true}
        opacity={texture === "glass" ? 0.7 : 1}
        attach='material'
      />
    </mesh>
  );
}