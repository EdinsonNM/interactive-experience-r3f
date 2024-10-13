import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <spotLight intensity={1.5} color="yellow" position={[-1, 1, 0]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <gridHelper />
      <axesHelper />
      <OrbitControls target={[0, 2, 1]} />
    </>
  );
}
