import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet";

import Ground from "./components/Ground";
import Player from "./components/Player";
import FPV from "./components/FirstPersonView";
import Cubes from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Minecraft + React + Three</title>
        <link rel="icon" href="/icons8-minecraft-grass-cube-gradient-120.png" />
      </Helmet>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intesity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
