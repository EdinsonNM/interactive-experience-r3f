import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import useLoadPage from "../../hooks/use-load-page";
export default function Page01() {
  useLoadPage(1);
  return (
    <>
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-cyan-700 flex flex-col justify-center items-start pointer-events-none">
        <div className="mx-20 flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center">
            Creando experiencias interactivas con React y Three JS
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-center text-gray-500">
            “Haciendo programación divertida”
          </h2>
          <div className="kbd kbd-l flex-grow mx-auto">
            npm install three @types/three @react-three/fiber
          </div>
        </div>
      </div>
    </>
  );
}
