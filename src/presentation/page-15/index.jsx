import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page15() {
  useLoadPage(15);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <Canvas
        className="w-full h-full"
        shadows
        camera={{ fov: 75, position: [0, 3, 5] }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-white flex flex-col justify-start  items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-cyan-700 mt-10">
          Scene
        </h1>
        <h2 className="md:text-2xl text-lg font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “Scene en Three.js es donde colocamos y organizamos todos nuestros
          objetos 3D.”
        </h2>
        <div className="kbd md:kbd-lg kbd-xs">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`<Canvas>
  <spotLight intensity={1.5} color="yellow" position={[-1, 1, 0]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
