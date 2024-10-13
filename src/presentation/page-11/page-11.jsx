import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";
import { Physics } from "@react-three/rapier";

export default function Page11() {
  useLoadPage(11);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas
        className="w-full h-full"
        shadows
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
        camera={{ position: [0, 5, 12], fov: 45 }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center pb-32 items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-cyan-700">
          Juegos{" "}
        </h1>
        <h2 className="md:text-2xl text-lg font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “Desde juegos simples hasta complejos, puedes usar React Three Fiber
          para crear juegos 3D. ”
        </h2>
        <div className="kbd kbd-lg">npm install @react-three/rapier</div>
      </div>
    </div>
  );
}
