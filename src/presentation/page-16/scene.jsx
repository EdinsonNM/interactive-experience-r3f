import { OrbitControls } from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <spotLight intensity={1.5} color="yellow" position={[-1, 1, 0]} />
      <mesh position={[-2, 0, 0]}>
        <cylinderGeometry />
        <meshBasicMaterial color="yellow" wireframe />
      </mesh>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" wireframe />
      </mesh>
      <OrbitControls target={[0, 2, 1]} />
    </>
  );
}
