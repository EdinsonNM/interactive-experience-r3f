import {
  CameraControls,
  Html,
  OrbitControls,
  Text,
  Text3D,
} from "@react-three/drei";
import useCameraControlHelper from "../../hooks/use-cameracontrol-helper";
import { useEffect, useRef } from "react";

export default function Scene() {
  const cameraControlsRef = useRef();
  useCameraControlHelper(cameraControlsRef);

  useEffect(() => {
    cameraControlsRef.current.setLookAt(
      ...[
        2.336313127553227, -0.7205192586653342, 1.533606268224697,
        0.7918282559869882, -1.2915935287795162, -0.364179217018434,
      ],
      true
    );
  }, []);
  const onClickWebGL = () => {
    cameraControlsRef.current.setLookAt(
      ...[
        2.2130676747356532, 0.32843467432370965, 1.3182606101000713,
        0.668582803169414, -0.24263959579047237, -0.5795248751430595,
      ],
      true
    );
  };
  const onClickThreeJS = () => {
    cameraControlsRef.current.setLookAt(
      ...[
        2.2640858129236006, 1.0114266389495552, 1.5882955370168155,
        0.037905798976925795, 0.8665475351536509, -0.8480531514199342,
      ],
      true
    );
  };
  const onClickReactJS = () => {
    cameraControlsRef.current.setLookAt(
      ...[
        2.3039980460795664, 2.3986748773929585, 1.8355666648531317,
        0.22541925316581796, 1.8858265344313687, -0.859352520205388,
      ],
      true
    );
  };

  const onClickReactThreeFiber = () => {
    cameraControlsRef.current.setLookAt(
      ...[
        2.0168810357055964, 1.3879578879771768, 3.7976646276054264,
        0.45373450084549427, 0.5160011986688715, -0.73564121651109,
      ],
      true
    );
  };
  return (
    <>
      <CameraControls ref={cameraControlsRef} />
      <ambientLight intensity={0.5} />
      <hemisphereLight groundColor="cyan" color="blue" />
      <group position={[2, -1, 0]}>
        <group>
          <mesh position={[0, 0, 0]} onClick={onClickWebGL}>
            <boxGeometry args={[1, 0.4, 1]} scale={[1, 1, 0.5]} />
            <meshStandardMaterial />
            <Text position={[0, 0.4, 0]} scale={0.2}>
              Web GL
            </Text>
            <Text
              position={[0, 0, 0.6]}
              center
              scale={0.05}
              color="black"
              maxWidth={20}
              textAlign="center"
            >
              Dibuja los gráficos.
            </Text>
          </mesh>
        </group>
        <group position={[0, 1, 0]}>
          <mesh onClick={onClickThreeJS}>
            <boxGeometry args={[1, 0.4, 1]} scale={[1, 1, 0.5]} />
            <meshStandardMaterial />
          </mesh>
          <Text position={[0, 0.4, 0]} scale={0.2}>
            Three JS
          </Text>
          <Text
            position={[0, 0, 0.6]}
            center
            scale={0.05}
            color="black"
            maxWidth={20}
            textAlign="center"
          >
            Hace que sea más fácil trabajar con WebGL.
          </Text>
        </group>

        <group position={[0, 2, 0]}>
          <mesh onClick={onClickReactJS}>
            <boxGeometry args={[1, 0.4, 1]} scale={[1, 1, 0.5]} />
            <meshStandardMaterial />
          </mesh>
          <Text position={[0, 0.4, 0]} scale={0.2}>
            React JS
          </Text>
          <Text
            position={[0, 0, 0.6]}
            center
            scale={0.05}
            color="black"
            maxWidth={15}
            textAlign="center"
          >
            Gestiona la interfaz de usuario y el estado de la aplicación
          </Text>
        </group>

        <group position={[0, 3, 0]}>
          <mesh onClick={onClickReactThreeFiber}>
            <boxGeometry args={[1, 0.4, 1]} scale={[1, 1, 0.5]} />
            <meshStandardMaterial />
          </mesh>
          <Text position={[0, 0.4, 0]} scale={0.2}>
            React Three Fiber
          </Text>
          <Text
            position={[0, 0, 0.6]}
            center
            scale={0.05}
            color="black"
            maxWidth={20}
            textAlign="center"
          >
            Nos permite usar Three JS en React
          </Text>
        </group>
      </group>
    </>
  );
}
