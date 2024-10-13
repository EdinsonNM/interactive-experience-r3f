import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page25() {
  useLoadPage(25);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas
        className="w-full h-full"
        camera={{ fov: 75, position: [0, 1, 2] }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center  items-center pointer-events-none gap-8"></div>
    </div>
  );
}
