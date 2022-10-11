import { usePlane } from "@react-three/cannon";
import { useDispatch, useSelector } from "react-redux";

import { groundTexture } from "../assets/textures";
import { addCube } from "../store/slices/cubeSlice";

export default function Ground() {
  const dispatch = useDispatch();
  const activeCubes = useSelector((state) => state.cubes.cubes);
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
        const activePosition = activeCubes.map((cube) => {
          const [X, Y, Z] = cube.pos;
          if (X === x && Y === y && Z === z) {
            return cube.pos;
          }
        });
        if (JSON.stringify(activePosition.flat()) === JSON.stringify([x, y, z])) return;
        dispatch(addCube({ X: x, Y: y, Z: z }));
      }}>
      <planeGeometry attach="geometry" args={[200, 200]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
