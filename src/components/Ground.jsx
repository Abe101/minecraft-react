import { usePlane } from "@react-three/cannon";
import { useDispatch } from "react-redux";

import { groundTexture } from "../assets/textures";
import { addCube } from "../store/slices/cubeSlice";

export default function Ground() {
  const dispatch = useDispatch();
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  return (
    <mesh
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const [x, y, z] = Object.values(e.point).map((val) => Math.ceil(val));
        dispatch(addCube({ X: x, Y: y, Z: z }));
      }}
    >
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
