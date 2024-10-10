import { Gltf } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Chair() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Gltf
      src="/models/page-03/hyo-room-chair.gltf"
      position={[0, 0.2, 0.6]}
      ref={ref}
    />
  );
}
