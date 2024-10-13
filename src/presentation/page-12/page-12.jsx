import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page11() {
  2;
  useLoadPage(12);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas className="w-full h-full" shadows>
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-center mt-20 pb-32 items-start pointer-events-none gap-8">
        <div className="mx-20 flex flex-col gap-4">
          <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-white">
            Qué es React Three Fiber?
          </h1>
          <h2 className="text-2xl font-bold text-center text-gray-100 mx-auto max-w-4xl">
            {/* <ul className="list-disc list-inside text-start space-y-4">
              <li>“WebGL” dibuja los gráficos.</li>
              <li>“Three JS” hace que sea más fácil trabajar con WebGL</li>
              <li>
                “React” gestiona la interfaz de usuario y el estado de la
                aplicación
              </li>
              <li>“React Three Fiber” nos permite usar Three JS en React</li>
            </ul> */}
          </h2>
        </div>
      </div>
    </div>
  );
}
