import { CameraControls, Gltf, Html } from "@react-three/drei";
import useCameraControlHelper from "../../hooks/use-cameracontrol-helper";
import { useEffect, useRef } from "react";

export default function Scene() {
  const cameraControls = useRef(null);
  //useCameraControlHelper(cameraControls);
  useEffect(() => {
    if (!cameraControls.current) return;
    cameraControls.current.setLookAt(
      ...[
        0.9146201067909023, 0.3564942359512938, 1.7500434633632862,
        -0.856348556106171, 0.4407374052315713, -0.6673325308667665,
      ]
    );
    cameraControls.current.update();
  }, []);

  return (
    <>
      <CameraControls ref={cameraControls} />
      <ambientLight intensity={2.5} />
      <Gltf src="/models/page-02/Little City.glb" rotation={[0, Math.PI, 0]} />
    </>
  );
}
