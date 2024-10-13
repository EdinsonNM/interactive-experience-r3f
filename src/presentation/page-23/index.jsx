import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page23() {
  useLoadPage(23);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas
        className="w-full h-full"
        camera={{ fov: 75, position: [0, 10, 40] }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center  items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-white mt-10">
          Unos cuantos ejemplos más
        </h1>
        <h2 className="md:text-2xl text-lg font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “Permiteme mostraros unos cuantos ejemplos más de las cosas que se
          pueden hacer con React Three Fiber”
        </h2>
      </div>
    </div>
  );
}
