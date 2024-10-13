import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page24() {
  useLoadPage(24);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas
        className="w-full h-full"
        camera={{ fov: 45, position: [0, 0.3, -3] }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center  items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-white mt-10">
          Resumen del viaje
        </h1>
        <h2 className="md:text-2xl text-lg font-bold text-center text-gray-100 mx-auto max-w-4xl">
          <ul className="list-disc list-inside text-left space-y-4">
            <li className="text-2xl">Recordemos el Principio</li>
            <li className="text-2xl">Resumen del Viaje</li>
            <li className="text-2xl">El Poder Está en Sus Manos</li>
            <li className="text-2xl">¡No Tengas Miedo de Experimentar!</li>
          </ul>
        </h2>
      </div>
    </div>
  );
}
