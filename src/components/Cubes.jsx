import { useSelector } from "react-redux";

import Cube from "./Cube";

export default function Cubes() {
  const cubes = useSelector((state) => state.cubes.cubes);
  return cubes.map(({ key, pos, texture }) => {
    return <Cube key={key} position={pos} texture={texture} />;
  });
}
