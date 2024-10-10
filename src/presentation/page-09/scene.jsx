import { Environment } from "@react-three/drei";
import Model from "./components/model";
import { useRef } from "react";

export default function Scene() {
  const scroll = useRef(0);
  return (
    <>
      <ambientLight intensity={1} />

      <Model scroll={scroll} />
      <Environment preset="city" />
    </>
  );
}
