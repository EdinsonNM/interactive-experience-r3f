import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <spotLight intensity={0.5} color="yellow" position={[-1, 1, 0]} />
      <gridHelper />
      <axesHelper />
      <OrbitControls />
    </>
  );
}
