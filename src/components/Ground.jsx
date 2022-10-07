import { usePlane } from "@react-three/cannon";
import { useDispatch } from "react-redux";

import { groundTexture } from "../assets/textures";
import { addCube } from "../store/slices/cubeSlice";

export default function Ground() {
  const dispatch = useDispatch();
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.25, 0],
  }));

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        dispatch(addCube({ X: x - 0.5, Y: y, Z: z - 0.5 }));
      }}>
      <planeGeometry attach="geometry" args={[200, 200]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
