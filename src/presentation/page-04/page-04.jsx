import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import Steps from "../../components/steps/steps";
export default function Page04() {
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
        <div>
          <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center">
            ¿Por qué aprender desarrollo web 3D?
          </h1>
          <h2 className="text-2xl font-bold text-center text-gray-500">
            “Haciendo programación divertida”
          </h2>
        </div>
      </div>
      <Steps page={4} totalPages={10} />
    </>
  );
}
