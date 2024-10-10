import { useAnimations, useCursor, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Developer() {
  const { scene, animations } = useGLTF("/models/developer.gltf");
  const developer = useRef();
  const { actions, mixer } = useAnimations(animations, developer);

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play(); // Reproduce la primera animación
    }
  }, [actions]);

  useFrame((_, delta) => {
    if (mixer) mixer.update(delta); // Actualiza el mixer en cada frame
  });
  return (
    <group ref={developer} onClick={() => actions["parpadear"].play()}>
      <primitive object={scene} />;
    </group>
  );
}
useGLTF.preload("/models/developer.gltf");
