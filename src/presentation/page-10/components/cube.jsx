import { RigidBody } from "@react-three/rapier";
import { useRef, useState } from "react";

export default function Cube(props) {
  const [red, setRed] = useState(false);
  const isDraggingRef = useRef(false);
  const meshRef = useRef(null);
  return (
    <RigidBody gravityScale={0.8} restitution={1.1} mass={1} {...props}>
      <mesh
        ref={meshRef}
        onClick={() => setRed(!red)}
        pointerEventsType={{ deny: "grab" }}
        onPointerDown={(e) => {
          if (isDraggingRef.current) {
            return;
          }
          isDraggingRef.current = true;
          //meshRef.position.copy(e.point);
        }}
        onPointerMove={(e) => {
          if (!isDraggingRef.current) {
            return;
          }
          //meshRef.position.copy(e.point);
        }}
        onPointerUp={(e) => (isDraggingRef.current = false)}
      >
        <boxGeometry />
        <meshBasicMaterial color={red ? "red" : "blue"} />
      </mesh>
    </RigidBody>
  );
}
