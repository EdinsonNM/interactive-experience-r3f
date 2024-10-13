import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page22() {
  useLoadPage(22);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas
        className="w-full h-full"
        camera={{ fov: 75, position: [0, 10, 40] }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-start  items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-white mt-10">
          Colisiones
        </h1>
        <h2 className="md:text-2xl text-lg font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “Permiten que los objetos en tu escena interactúen de manera
          realista.”
        </h2>
        <div className="kbd kbd-lg">npm install @react-three/rapier</div>
        <div className="flex gap-4">
          <a
            href="https://react-three-rapier.pmnd.rs/"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto hover:underline"
          >
            https://react-three-rapier.pmnd.rs/
          </a>
        </div>
      </div>
    </div>
  );
}
