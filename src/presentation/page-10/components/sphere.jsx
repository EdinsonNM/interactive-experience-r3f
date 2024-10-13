import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { BallCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import { Gltf, useCursor } from "@react-three/drei";
import { usePointerXRInputSourceEvents, useXR } from "@react-three/xr";

const DraggableBall = () => {
  const sphereRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const mouse = useRef(new THREE.Vector2());
  const { camera, raycaster } = useThree();

  useCursor(isDragging);
  const onPointerDown = (event) => {
    if (!sphereRef.current) return;
    setIsDragging(true);
    //sphereRef.current.setBodyType("kinematicPosition");
    console.log(isDragging);
    event.stopPropagation();
  };

  const onPointerUp = (event) => {
    if (!sphereRef.current) return;
    setIsDragging(false);
    //sphereRef.current.setBodyType("dynamic");

    console.log(isDragging);
    event.stopPropagation();
  };

  const onPointerMove = (event) => {
    if (!isDragging) return;
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse.current, camera);
    const intersect = raycaster.intersectObject(sphereRefObj.current);
    if (intersect.length > 0) {
      sphereRef.current.setTranslation({
        x: intersect[0].point.x,
        y: intersect[0].point.y,
        z: 0,
      });
    }
  };

  const sphereRefObj = useRef();

  return (
    <RigidBody
      ref={sphereRef}
      colliders={false}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
      position={[0, 5, -2]}
      gravityScale={0.8}
      restitution={1.1}
      mass={1}
      name="ball"
    >
      <Gltf
        src="/models/page-10/ball.gltf.glb"
        scale={0.5}
        ref={sphereRefObj}
        userData={{ isDragging: false, name: "sphere" }}
      />
      <BallCollider args={[0.5]} />
    </RigidBody>
  );
};
export default DraggableBall;
