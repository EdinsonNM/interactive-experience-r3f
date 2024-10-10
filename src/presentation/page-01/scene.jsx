import { CameraControls, Environment, Html } from "@react-three/drei";
import Developer from "./components/developer";
import { useEffect, useRef } from "react";
import useCameraControlHelper from "../../hooks/use-cameracontrol-helper";

export default function Scene() {
  const cameraControls = useRef(null);
  useCameraControlHelper(cameraControls);
  useEffect(() => {
    if (!cameraControls.current) return;
    cameraControls.current.setLookAt(
      ...[
        12.36503792214317, 4.031163040691924, 12.22944449961505,
        -3.7779956662457996, 5.704126080057693, 5.483431454899897,
      ]
    );
    cameraControls.current.update();
  }, []);

  const changeScene = () => {
    cameraControls.current.setLookAt(
      ...[
        -0.9594734512495422, 4.657416535239954, 22.836711499085375,
        -4.859893038885028, 5.492781516568812, 5.719646237926719,
      ],
      true
    );
    cameraControls.current.update();
  };
  return (
    <>
      <ambientLight color={"orange"} intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={0.5} />
      <CameraControls ref={cameraControls} />
      <Developer />
      <Environment preset="city" />
      <Html className="w-full h-full pointer-events-auto">
        <button onClick={changeScene}>Hola</button>
      </Html>
    </>
  );
}
