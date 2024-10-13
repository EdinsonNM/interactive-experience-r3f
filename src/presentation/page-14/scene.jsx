import { OrbitControls } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";

export default function Scene() {
  const lightRef = useRef();
  return (
    <>
      <spotLight intensity={0.5} color="yellow" position={[-1, 1, 0]} />
      <gridHelper />
      <axesHelper />
      <OrbitControls />
    </>
  );
}
