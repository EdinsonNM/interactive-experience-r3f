import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";
import { createXRStore, XR } from "@react-three/xr";
import { Physics } from "@react-three/rapier";
const store = createXRStore({ handTracking: true });

export default function Page10() {
  useLoadPage(10);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas className="w-full h-full">
        <XR store={store}>
          <Physics>
            <Scene />
          </Physics>
        </XR>
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-end pb-32 items-center pointer-events-none gap-8">
        <button
          onClick={() => store.enterAR()}
          className="btn btn-active btn-primary pointer-events-auto"
        >
          Enter AR
        </button>
      </div>
    </div>
  );
}
