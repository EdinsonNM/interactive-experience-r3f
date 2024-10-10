import { useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Proyector() {
  const videoTexture = useVideoTexture("/videos/video1.mov");
  const refLight = useRef();
  const targetRef = useRef();
  useFrame(() => {
    refLight.current.target = targetRef.current;
  });
  return (
    <>
      <mesh
        ref={targetRef}
        rotation={[0, Math.PI / 2, 0]}
        position={[-0.925, 1.36, 0]}
        scale={[0.12, 0.12, 0.12]}
      >
        <planeGeometry args={[16, 9, 1]} />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
      <pointLight
        position={[0.75, 0.64, -0.35]}
        color={"blue"}
        intensity={10}
      />
      <spotLight
        ref={refLight}
        position={[0.75, 0.64, -0.35]}
        angle={0.3}
        penumbra={0.8}
        intensity={100}
        distance={1}
        target={targetRef.current}
        color={"white"}
      />
    </>
  );
}
