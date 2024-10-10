import { useAnimations, useCursor, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { AnimationMixer } from "three";

export default function Developer() {
  const { scene, animations } = useGLTF("/models/developer.gltf");
  const developer = useRef();
  const { actions } = useAnimations(animations, developer);
  useCursor(true);
  const mixer = useRef();
  if (!mixer.current) {
    mixer.current = new AnimationMixer(scene);
    animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }

  return (
    <group
      onClick={() => actions["parpadear"].play()}
      onDoubleClick={() => actions["parpadear"].stop()}
      onPointerOver={() => actions["parpadear"].play()}
      onPointerLeave={() => actions["parpadear"].stop()}
      ref={developer}
    >
      <primitive object={scene} />;
    </group>
  );
}
useGLTF.preload("/models/developer.gltf");
