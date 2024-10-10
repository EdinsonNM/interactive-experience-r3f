import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Dog() {
  const meshRef = useRef(null);
  const { scene, animations } = useGLTF("/models/page-03/dog_puppy/scene.gltf");
  const { actions } = useAnimations(animations, meshRef);
  console.log("robot actions", actions);
  useEffect(() => {
    actions["Animation"]?.play();
  }, [actions]);
  return (
    <group ref={meshRef}>
      <primitive
        object={scene}
        scale={[0.2, 0.2, 0.2]}
        position={[-0.1, 0.2, -0.6]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
}
