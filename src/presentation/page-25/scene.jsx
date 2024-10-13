import { Gltf, Text, useAnimations, useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
export default function Scene() {
  const ref = useRef();
  const { scene, animations } = useGLTF("/models/page-25/scene.gltf");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);
  return (
    <>
      <OrbitControls target={[0, 1, 1]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <Text size={0.5} position={[0, 3, -4]} maxWidth={10}>
        La creatividad es inteligencia divirtiéndose.
      </Text>

      <group position={[0, 0, -2]} ref={ref}>
        <primitive object={scene} />
      </group>
      <gridHelper />
    </>
  );
}
