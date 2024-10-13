import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page19() {
  useLoadPage(19);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden">
      <Canvas
        className="w-full h-full"
        shadows
        camera={{ fov: 75, position: [0, 0, 5] }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center  items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-cyan-700">
          Y eso es todo?
        </h1>
      </div>
    </div>
  );
}
