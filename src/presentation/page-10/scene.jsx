import { RigidBody } from "@react-three/rapier";
import Cube from "./components/cube";
import Proyector from "../page-03/components/proyector";
export default function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      {Array.from({ length: 10 }).map((_, index) => (
        <Cube
          key={index}
          position={[
            Math.random() * 10,
            Math.random() * 10,
            Math.random() * 10,
          ]}
        />
      ))}
      <RigidBody type="fixed" rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial wireframe />
        </mesh>
      </RigidBody>
      <gridHelper args={[50, 50]} position={[0, -0.5, 0]} />
      <Proyector />
    </>
  );
}
