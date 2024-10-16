import { Environment, Html, OrbitControls } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Scene() {
  const { geometry, wireframe } = useControls({
    wireframe: true,
    geometry: {
      value: "sphere",
      options: [
        "sphere",
        "box",
        "cylinder",
        "cone",
        "capsule",
        "torus",
        "dodecahedron",
        "icosahedron",
        "lathe",
        "octahedron",
      ],
    },
  });
  const mapTexture = useTexture("/models/page-17/mat1.jpg");

  const getGeometryCode = (geometry) => {
    if (geometry === "sphere") return "<sphereGeometry />";
    if (geometry === "box") return "<boxGeometry />";
    if (geometry === "cylinder") return "<cylinderGeometry />";
    if (geometry === "cone") return "<coneGeometry />";
    if (geometry === "capsule") return "<capsuleGeometry />";
    if (geometry === "torus") return "<torusGeometry />";
    if (geometry === "dodecahedron") return "<dodecahedronGeometry />";
    if (geometry === "icosahedron") return "<icosahedronGeometry />";
    if (geometry === "lathe") return "<latheGeometry />";
    if (geometry === "octahedron") return "<octahedronGeometry />";
  };
  return (
    <>
      <directionalLight position={[0, 4, 5]} intensity={3} />
      <group>
        <mesh position={[0, 0, 0]}>
          {geometry === "sphere" && <sphereGeometry />}
          {geometry === "box" && <boxGeometry />}
          {geometry === "cylinder" && <cylinderGeometry />}
          {geometry === "cone" && <coneGeometry />}
          {geometry === "capsule" && <capsuleGeometry />}
          {geometry === "torus" && <torusGeometry />}
          {geometry === "dodecahedron" && <dodecahedronGeometry />}
          {geometry === "icosahedron" && <icosahedronGeometry />}
          {geometry === "lathe" && <latheGeometry />}
          {geometry === "octahedron" && <octahedronGeometry />}
          <meshPhysicalMaterial wireframe={wireframe} map={mapTexture} />
        </mesh>
        <Html center position={[0, 2, 0]}>
          <SyntaxHighlighter language="html" style={atomDark}>
            {`${getGeometryCode(geometry)}`}
          </SyntaxHighlighter>
        </Html>
      </group>
      <OrbitControls target={[0, 1, 0]} makeDefault />
      <Environment preset="city" />
      <EffectComposer>
        <Bloom
          intensity={0.7}
          levels={8}
          blendFunction={BlendFunction.ADD}
          mipmapBlur
          kernelSize={KernelSize.LARGE}
          resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
          resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
        ></Bloom>
      </EffectComposer>
    </>
  );
}
