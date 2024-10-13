import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import useLoadPage from "../../hooks/use-load-page";
export default function Page04() {
  useLoadPage(4);
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
          <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center">
            ¿Por qué aprender desarrollo web 3D?
          </h1>
          <h2 className="text-2xl font-bold text-center text-gray-500 max-w-4xl">
            “Aprender desarrollo web 3D es una excelente manera de expandir tus
            habilidades y crear experiencias bellas y únicas. Puedes crear desde
            objetos 3D simples hasta escenas y juegos 3D complejos, el único
            límite es tu imaginación ”
          </h2>
        </div>
      </div>
    </>
  );
}
