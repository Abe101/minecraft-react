import { useBox } from "@react-three/cannon";
import * as textures from "../assets/textures";

export default function Cube({ position, texture }) {
  const [ref] = useBox(() => ({
    type: "Static",
    position,
  }));
  const activeTexture = textures[texture + "Texture"];
  console.log("activeTexture", activeTexture);

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach='geometry' />
      <meshStandardMaterial map={activeTexture} attach='material' />
    </mesh>
  );
}
