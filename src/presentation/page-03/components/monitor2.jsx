import { useVideoTexture } from "@react-three/drei";

export default function Monitor2() {
  const videoTexture = useVideoTexture("/videos/code.mov");

  return (
    <>
      <mesh
        rotation={[0, Math.PI / 2.9, 0]}
        position={[-0.62, 0.92, 0.13]}
        scale={[0.025, 0.028, 0.025]}
      >
        <planeGeometry args={[16, 9, 1]} />
        <meshBasicMaterial map={videoTexture} />
      </mesh>{" "}
      <pointLight position={[-0.62, 0.92, 0.13]} color={"green"} />
    </>
  );
}
