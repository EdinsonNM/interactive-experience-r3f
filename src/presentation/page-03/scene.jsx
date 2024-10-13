import { CameraControls, Gltf, useGLTF } from "@react-three/drei";
import Monitor1 from "./components/monitor1";
import Monitor2 from "./components/monitor2";
import Proyector from "./components/proyector";
import Chair from "./components/chair";
import Dog from "./components/dog";
import { Suspense, useEffect, useRef } from "react";

export default function Scene() {
  const cameraControls = useRef(null);
  const { scene } = useGLTF("/models/page-03/hyo-room.gltf", "draco/gltf/");
  useEffect(() => {
    if (!cameraControls.current) return;
    cameraControls.current.setLookAt(
      ...[
        3.637330148907308, 1.0580269782490965, -0.07022806097829981,
        -0.22615463800099705, 0.5431412495196157, 0.8525505926954788,
      ]
    );
    cameraControls.current.update();
  }, []);
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 1, -2]}
        rotation={[0, Math.PI / 2, 0]}
        intensity={25}
        color={"purple"}
        castShadow
      />
      <CameraControls ref={cameraControls} />
      <directionalLight />
      <ambientLight position={[0, 10, 10]} color={"#f2f2f2"} />
      <pointLight position={[0, 10, 5]} color={"white"} />
      <Proyector />
      <Suspense fallback={null}>
        <primitive object={scene} />
      </Suspense>
      <Monitor1 />
      <Monitor2 />
      <Chair />
      <Dog />
    </>
  );
}
useGLTF.preload("/models/page-03/hyo-room.gltf", "draco/gltf/");
