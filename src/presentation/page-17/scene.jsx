import {
  Environment,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useTexture } from "@react-three/drei";
import { useControls } from "leva";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";

export default function Scene() {
  const {
    opacity,
    transparent,
    roughness,
    metalness,
    emissiveIntensity,
    reflectivity,
    transmission,
  } = useControls({
    opacity: { value: 1, min: 0, max: 1 }, // Controla la opacidad
    transparent: true, // Habilita o deshabilita la transparencia
    roughness: { value: 0, min: 0, max: 1 },
    metalness: { value: 0, min: 0, max: 1 },
    emissiveIntensity: { value: 0, min: 0, max: 10 },
    reflectivity: { value: 0.5, min: 0, max: 10 },
    transmission: { value: 0, min: 0, max: 10 },
  });
  const mapTexture = useTexture("/models/page-17/mat2.jpg");
  const transmissionTexture = useTexture("/models/page-17/mat2.jpg");
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry />
        <meshPhysicalMaterial
          color={"red"}
          opacity={opacity}
          transparent={transparent}
          roughness={roughness}
          metalness={metalness}
          emissiveIntensity={emissiveIntensity}
          emissive="#ffffff"
          reflectivity={reflectivity}
          transmission={transmission}
        />
      </mesh>
      <OrbitControls target={[0, 0, 0]} makeDefault />
      <Environment preset="night" background />
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
