import {
  Gltf,
  Html,
  OrbitControls,
  TransformControls,
  useGLTF,
} from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction, KernelSize, Resolution } from "postprocessing";
import { useRef } from "react";

export default function Scene() {
  const directionalLightRef = useRef();
  const ambientLightRef = useRef();
  const hemisphereLightRef = useRef();
  const spotLightRef = useRef();
  const pointLightRef = useRef();
  const {
    ambientLight,
    directionalLight,
    hemisphereLight,
    spotLight,
    pointLight,
    intensity,
    suzanneEmissiveIntensity,
  } = useControls({
    ambientLight: false,
    directionalLight: false,
    hemisphereLight: false,
    spotLight: false,
    pointLight: false,
    intensity: { value: 1, min: 0, max: 10, step: 0.1 },
    suzanneEmissiveIntensity: { value: 0, min: 0, max: 10, step: 0.1 },
  });
  const { nodes } = useGLTF("/models/page-18/model.gltf");
  return (
    <>
      <OrbitControls makeDefault target={[0, 2, 0]} />
      <TransformControls object={directionalLightRef} />
      <group ref={directionalLightRef} position={[-2, 1, 2]}>
        <directionalLight
          intensity={directionalLight ? intensity : 0}
          castShadow
          shadow-mapSize={[2048, 2048]}
          color="#f9f977"
        />
        <Html position={[0, -0.2, 0]} center className="w-[150px] text-center">
          Directional Light
        </Html>
      </group>
      <TransformControls object={ambientLightRef} />
      <group ref={ambientLightRef} position={[2, 1, -2]}>
        <ambientLight intensity={ambientLight ? intensity : 0} />
        <Html position={[0, -0.2, 0]} center className="w-[150px]">
          Ambient Light
        </Html>
      </group>
      <TransformControls object={hemisphereLightRef} />
      <group ref={hemisphereLightRef} position={[2, 1, 2]}>
        <hemisphereLight
          skyColor="red"
          groundColor="blue"
          intensity={hemisphereLight ? intensity : 0}
        />
        <Html position={[0, -0.2, 0]} center className="w-[150px]">
          Hemisphere Light
        </Html>
      </group>
      <TransformControls object={spotLightRef} />
      <group ref={spotLightRef} position={[-2, 1, -2]}>
        <spotLight
          intensity={spotLight ? intensity : 0}
          castShadow
          shadow-mapSize={[2048, 2048]}
          angle={0.8}
          color="red"
        />
        <Html position={[0, -0.2, 0]} center className="w-[150px]">
          Spot Light
        </Html>
      </group>
      <TransformControls object={pointLightRef} />
      <group ref={pointLightRef} position={[0, 2, 0]}>
        <pointLight
          intensity={pointLight ? intensity : 0}
          castShadow
          shadow-mapSize={[2048, 2048]}
          color="green"
        />
        <Html position={[0, -0.2, 0]} center className="w-[150px]">
          Point Light
        </Html>
      </group>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="cyan" />
      </mesh>
      <mesh position={[2, 0.5, 0]} receiveShadow castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh position={[0, -0.16, 0]} receiveShadow castShadow>
        <boxGeometry args={[10, 0.3, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Suzanne.geometry}
        dispose={null}
        position={[3, -0.5, -2]}
      >
        <meshStandardMaterial
          color={"white"}
          emissive={"orange"}
          emissiveIntensity={suzanneEmissiveIntensity}
          castShadow
          transparent={0.5}
        />
      </mesh>
      <EffectComposer>
        <Bloom
          intensity={0.7}
          levels={8}
          blendFunction={BlendFunction.ADD}
          mipmapBlur
          kernelSize={KernelSize.LARGE}
          resolutionX={Resolution.AUTO_SIZE}
          resolutionY={Resolution.AUTO_SIZE}
        ></Bloom>
      </EffectComposer>

      <gridHelper color="#010101" lineWidth={0.1} cellSize={1} />
      <axesHelper />
    </>
  );
}
