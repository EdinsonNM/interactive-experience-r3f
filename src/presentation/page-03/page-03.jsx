import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import { useNavigate } from "react-router-dom";
import Steps from "../../components/steps/steps";
export default function Page03() {
  const navigate = useNavigate();
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
            Quien soy yo?
          </h1>
          <h2 className="text-2xl font-bold text-center text-gray-500">
            Solo un poquito de mi
          </h2>
        </div>
      </div>
      <Steps page={3} totalPages={10} />
    </>
  );
}
