import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Robot() {
  const meshRef = useRef(null);
  const { scene, animations } = useGLTF(
    "/models/room/robot-security/scene.gltf"
  );
  const { actions } = useAnimations(animations, meshRef);
  console.log("robot actions", actions);
  useEffect(() => {
    actions["Take 01"]?.play();
  }, [actions]);
  return (
    <group ref={meshRef}>
      <primitive
        object={scene}
        scale={[0.08, 0.08, 0.08]}
        position={[-0.7, 0.75, -0.7]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </group>
  );
}
