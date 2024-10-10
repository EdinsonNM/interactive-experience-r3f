import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";
export default function Page09() {
  useLoadPage(9);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas className="w-full h-full" shadows>
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center items-center pointer-events-none gap-8">
        <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center">
          Realidad Aumentada y Realidad Virtual
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “La Realidad Aumentada y la Realidad Virtual están creciendo y
          volviéndose más accesibles. Puedes usar React Three Fiber para crear
          experiencias de AR/VR. ”
        </h2>
      </div>
    </div>
  );
}
