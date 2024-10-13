import {
  CameraControls,
  Gltf,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import FoodItem from "./components/food-item";
import useCameraControlHelper from "../../hooks/use-cameracontrol-helper";
import { useEffect, useRef } from "react";

export default function Scene() {
  const cameraControls = useRef();
  useCameraControlHelper(cameraControls);
  const foodItems = [
    {
      model: "/models/page-04/Pizza Steve.glb",
      page: 0,
      props: {
        rotation: [0, Math.PI / 2, 0],
      },
    },
    {
      model: "/models/page-04/Pizza.glb",
      page: 1,
      props: {
        scale: 5,
        rotation: [Math.PI / 4, 0, 0],
      },
    },
  ];
  useEffect(() => {
    if (!cameraControls.current) return;
    cameraControls.current.setLookAt(
      ...[
        -0.9934880288182762, 0.03953771066194084, 3.337404147072624,
        -1.3412565203944575, -0.20433178279536765, 0.014517748286139567,
      ]
    );
    cameraControls.current.update();
  }, []);
  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        target={[-2, 0, 0]}
      />
      <ambientLight intensity={3.5} />

      <ScrollControls pages={2}>
        <Scroll className="w-full h-full">
          {foodItems.map((foodItem, idx) => (
            <FoodItem key={idx} {...foodItem} {...foodItem.props} />
          ))}
        </Scroll>
        <Scroll className="w-full h-full"></Scroll>
      </ScrollControls>
    </>
  );
}
