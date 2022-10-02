import { ToastContainer } from "react-toastify";
import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TbCrosshair } from "react-icons/tb";

import Ground from "./components/Ground";
import Player from "./components/Player";
import FPV from "./components/FirstPersonView";
import Cubes from "./components/Cubes";
import TextureSelector from "./components/TextureSelector";
import Menu from "./components/Menu";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
      <div className="absolute top-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
        <TbCrosshair />
      </div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
