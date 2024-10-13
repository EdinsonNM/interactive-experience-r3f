import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import bg from "../resources/bg.jpg";

export default function Bg() {
  const texture = useTexture(bg);
  return (
    <mesh rotation={[0, Math.PI / 1.25, 0]} scale={100}>
      <sphereGeometry />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}
