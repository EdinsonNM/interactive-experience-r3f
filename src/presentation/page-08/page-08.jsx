import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";
export default function Page08() {
  useLoadPage(8);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas className="w-full h-full" shadows>
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center items-center pointer-events-none gap-8">
        <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center">
          Metaverso
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “El uso de 3D en la educación está creciendo. Puede usarse para
          visualizar conceptos complejos y hacerlos más fáciles de entender. ”
        </h2>
      </div>
    </div>
  );
}
