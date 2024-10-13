import { Gltf, OrbitControls, useGLTF } from "@react-three/drei";
import {
  BallCollider,
  InstancedRigidBodies,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { button, useControls } from "leva";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
const MAX_COUNT = 2000;

const createBody = () => ({
  key: Math.random(),
  position: [
    Math.random() * 20 - 10,
    Math.random() * 80,
    Math.random() * 20 - 10,
  ],
  rotation: [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ],
  scale: [0.5 + Math.random(), 0.5 + Math.random(), 0.5 + Math.random()],
});

export default function Scene() {
  const { scene } = useGLTF("/models/page-10/ball.gltf.glb");

  const {
    nodes: { Suzanne },
  } = useGLTF("/models/page-18/model.gltf");

  const api = useRef([]);

  const [bodies, setBodies] = useState(() =>
    Array.from({
      length: 100,
    }).map(() => createBody())
  );

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      for (let i = 0; i < MAX_COUNT; i++) {
        ref.current.setColorAt(i, new Color(Math.random() * 0xffffff));
      }
      ref.current.instanceColor.needsUpdate = true;
    }
  }, []);

  const addMesh = () => {
    if (bodies.length < MAX_COUNT) {
      setBodies((bodies) => [...bodies, createBody()]);
    }
  };

  const removeMesh = () => {
    console.log("removeMesh", bodies.length);

    if (bodies.length > 0) {
      setBodies((bodies) => bodies.slice(0, bodies.length - 1));
    }
  };

  useControls(
    {
      "add instanced mesh": button(addMesh),
      "remove instanced mesh": button(removeMesh),
    },
    [bodies]
  );

  const ballRef = useRef(null);
  return (
    <Physics>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 1, 2]} intensity={5} />
      <OrbitControls makeDefault target={[0, 2, 0]} />
      <RigidBody
        ref={ballRef}
        position={[0, 8, 0]}
        gravityScale={0.8}
        restitution={1.4}
        mass={1}
        name="ball"
        colliders={false}
        onClick={(e) => {
          ballRef.current.applyTorqueImpulse(
            {
              x: 10,
              y: 50,
              z: -10,
            },
            true
          );
        }}
      >
        <Gltf src="/models/page-10/ball.gltf.glb" scale={2} />
        <BallCollider args={[2]} />
      </RigidBody>
      <RigidBody type="fixed">
        <mesh position={[0, -0.16, 0]}>
          <boxGeometry args={[50, 0.3, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </RigidBody>
      <RigidBody colliders="ball">
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1]} />
          <meshStandardMaterial color="cyan" />
        </mesh>
      </RigidBody>

      <InstancedRigidBodies instances={bodies} ref={api} colliders="hull">
        <instancedMesh
          ref={ref}
          castShadow
          args={[Suzanne.geometry, undefined, MAX_COUNT]}
          count={bodies.length}
          onClick={(evt) => {
            api.current[evt.instanceId].applyTorqueImpulse(
              {
                x: 0,
                y: 50,
                z: 0,
              },
              true
            );
          }}
        >
          <meshPhysicalMaterial />
        </instancedMesh>
      </InstancedRigidBodies>
    </Physics>
  );
}
