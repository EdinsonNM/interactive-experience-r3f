import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Page16() {
  useLoadPage(16);
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
        <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-cyan-700 mt-10">
          Geometría
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-100 mx-auto max-w-4xl">
          “La geometría es el esqueleto de tus objetos 3D. Define la forma y
          estructura del objeto mediante vértices, aristas y caras.”
        </h2>
        <div className="kbd kbd-lg">
          <SyntaxHighlighter language="javascript" style={atomDark}>
            {`<boxGeometry />
<sphereGeometry />
<cylinderGeometry />`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
