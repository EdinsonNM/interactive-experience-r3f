import { OrbitControls, TransformControls } from "@react-three/drei";
import { useRef } from "react";

export default function Scene() {
  const lightRef = useRef();
  const meshRef = useRef();
  return (
    <>
      <TransformControls object={meshRef} />
      <TransformControls object={lightRef} />
      <spotLight
        intensity={1.5}
        color="yellow"
        position={[-1, 1, 0]}
        ref={lightRef}
      />
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <gridHelper />
      <axesHelper />
      <OrbitControls target={[0, 2, 1]} makeDefault />
    </>
  );
}
