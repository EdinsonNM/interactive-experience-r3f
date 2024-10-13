import { useRef, useCallback } from "react";
import { useSnapshot } from "valtio";
import { Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { easing } from "maath";
import { state } from "../page-11.state";
import { CylinderCollider, RigidBody } from "@react-three/rapier";

export default function Paddle({
  vec = new THREE.Vector3(),
  dir = new THREE.Vector3(),
}) {
  const api = useRef();
  const model = useRef();
  const { count } = useSnapshot(state);
  const { nodes, materials } = useGLTF("/models/page-11/pingpong.glb");
  const contactForce = useCallback((payload) => {
    state.api.pong(payload.totalForceMagnitude / 100);
    model.current.position.y = -payload.totalForceMagnitude / 10000;
  }, []);
  useFrame((state, delta) => {
    vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
    dir.copy(vec).sub(state.camera.position).normalize();
    vec.add(dir.multiplyScalar(state.camera.position.length()));
    api.current?.setNextKinematicTranslation({ x: vec.x, y: vec.y, z: 0 });
    api.current?.setNextKinematicRotation({
      x: 0,
      y: 0,
      z: (state.pointer.x * Math.PI) / 10,
      w: 1,
    });
    easing.damp3(model.current.position, [0, 0, 0], 0.2, delta);
    easing.damp3(
      state.camera.position,
      [-state.pointer.x * 4, 2.5 + -state.pointer.y * 4, 12],
      0.3,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });
  return (
    <RigidBody
      ccd
      canSleep={false}
      ref={api}
      type="kinematicPosition"
      colliders={false}
      onContactForce={contactForce}
    >
      <CylinderCollider args={[0.15, 1.75]} />
      <group ref={model} position={[0, 2, 0]} scale={0.15}>
        <Text
          anchorX="center"
          anchorY="middle"
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 1, 0]}
          fontSize={10}
          children={count}
        />
        <group rotation={[1.88, -0.35, 2.32]} scale={[2.97, 2.97, 2.97]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone010} />
          <skinnedMesh
            castShadow
            receiveShadow
            material={materials.glove}
            material-roughness={1}
            geometry={nodes.arm.geometry}
            skeleton={nodes.arm.skeleton}
          />
        </group>
        <group rotation={[0, -0.04, 0]} scale={141.94}>
          <mesh
            castShadow
            receiveShadow
            material={materials.wood}
            geometry={nodes.mesh.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.side}
            geometry={nodes.mesh_1.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.foam}
            geometry={nodes.mesh_2.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.lower}
            geometry={nodes.mesh_3.geometry}
          />
          <mesh
            castShadow
            receiveShadow
            material={materials.upper}
            geometry={nodes.mesh_4.geometry}
          />
        </group>
      </group>
    </RigidBody>
  );
}
