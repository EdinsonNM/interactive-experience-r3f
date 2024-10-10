import { useHelper, FaceControls } from "@react-three/drei";
import { useCallback, useRef } from "react";
import * as THREE from "three";

export default function Monito1r() {
  const faceControlsApiRef = useRef();

  const screenMatRef = useRef(null);

  const onVideoFrame = useCallback((e) => {
    if (!screenMatRef.current) return;
    screenMatRef.current.map = e.texture;
  }, []);
  const pointRef = useRef();
  const helper = useHelper(pointRef, THREE.PointLightHelper, "red");

  return (
    <>
      <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
        <FaceControls
          ref={faceControlsApiRef}
          autostart={true}
          makeDefault
          webcam={true}
          manualUpdate
          manualDetect
          onVideoFrame={onVideoFrame}
        />
      </group>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-0.75, 0.98, 0.68]}>
        <planeGeometry args={[0.6, 0.35]} />
        <meshStandardMaterial
          ref={screenMatRef}
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
        />
      </mesh>
      <pointLight ref={pointRef} position={[-0.75, 1, 0.68]} color={"yellow"} />
    </>
  );
}
