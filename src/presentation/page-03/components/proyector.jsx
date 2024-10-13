import { useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export default function Proyector(props) {
  const { position = [-0.925, 1.36, 0], rotation = [0, Math.PI / 2, 0] } =
    props;
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
        rotation={rotation}
        position={position}
        scale={[0.12, 0.12, 0.12]}
        {...props}
      >
        <planeGeometry args={[16, 9, 1]} />
        <meshBasicMaterial map={videoTexture} side={THREE.DoubleSide} />
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
