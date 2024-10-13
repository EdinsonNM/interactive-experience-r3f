import {
  Gltf,
  OrbitControls,
  PresentationControls,
  Stars,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Leva, useControls } from "leva";
function Character() {
  const group = useRef();
  const { scene, animations } = useGLTF("models/page-24/Steve.glb");
  const { actions } = useAnimations(animations, group);
  const [currentAction, setCurrentAction] = useState(null);

  useEffect(() => {
    actions[
      "CharacterArmature|CharacterArmature|CharacterArmature|Idle"
    ].play();
  }, []);
  const actionNames = Object.keys(actions);
  const totalActions = actionNames.length;
  useEffect(() => {
    if (totalActions > 0) {
      const changeAnimation = () => {
        const randomIndex = Math.floor(Math.random() * totalActions);
        const nextAction = actions[actionNames[randomIndex]];
        if (currentAction) {
          currentAction.fadeOut(0.5); // Suaviza la transición
        }
        nextAction.reset().fadeIn(0.5).play();
        setCurrentAction(nextAction);
      };

      const intervalId = setInterval(changeAnimation, 5000); // Cambia la animación cada 3 segundos
      return () => clearInterval(intervalId);
    }
  }, [actions, currentAction, totalActions, actionNames]);

  return (
    <group
      ref={group}
      scale={[0.15, 0.15, 0.15]}
      rotation={[0, Math.PI, 0]}
      position={[0, 0, -0.5]}
      castShadow
      receiveShadow
    >
      <primitive object={scene} castShadow />
    </group>
  );
}

function Scene({ intensity, fire, hasStars }) {
  const { camera } = useThree();
  const light = useRef();
  //useHelper(light, PointLightHelper, 0.5, "red");
  useEffect(() => {
    camera.lookAt(0, 0.8, 0);
  }, [camera]);
  return (
    <>
      {hasStars && (
        <Stars speed={1} depth={30} fade saturation={1} radius={100} />
      )}
      <Character />
      <Gltf src="models/page-24/2d-3d-mountain.gltf" receiveShadow />
      <ambientLight intensity={intensity * 2} />
      <fog attach="fog" far={25} near={3} color={"#00001A"} />
      <pointLight
        ref={light}
        color={"orange"}
        position={[0, 0.25, -0.85]}
        intensity={fire}
        decay={2}
        emissive={"orange"}
        castShadow
        receiveShadow
      />
    </>
  );
}

const interpolateColor = (color1, color2, factor) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - result[i]));
  }
  return result;
};

const colorToRgbString = (color) => {
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};
const interpolateValue = (value1, value2, factor) => {
  return value1 + factor * (value2 - value1);
};
export default function Mountain() {
  const { timeOfDay } = useControls({
    timeOfDay: { value: 0, min: 0, max: 1 }, // Slider de 0 a 1
  });

  const colors = {
    dawn: [50, 50, 100], // Color RGB para la madrugada (oscuro)
    morning: [135, 206, 235], // Color RGB para la mañana
    afternoon: [255, 223, 100], // Color RGB para la tarde
    night: [0, 0, 10], // Color RGB para la noche
  };
  const intensities = {
    dawn: 0.5, // Intensidad de luz para la madrugada
    morning: 1.0, // Intensidad de luz para la mañana
    afternoon: 0.8, // Intensidad de luz para la tarde
    night: 0.2, // Intensidad de luz para la noche
  };

  let interpolatedColor;
  let interpolatedIntensity;
  let interpolatedFirelightIntensity;
  let hasStars = false;
  if (timeOfDay <= 0.25) {
    // De madrugada a mañana
    interpolatedColor = interpolateColor(
      colors.dawn,
      colors.morning,
      timeOfDay / 0.25
    );
    interpolatedIntensity = interpolateValue(
      intensities.dawn,
      intensities.morning,
      timeOfDay / 0.25
    );
    interpolatedFirelightIntensity = interpolateValue(
      1.0,
      0.0,
      timeOfDay / 0.25
    ); // Fogata apagándose en la mañana

    hasStars = true;
  } else if (timeOfDay <= 0.5) {
    // De mañana a tarde
    interpolatedColor = interpolateColor(
      colors.morning,
      colors.afternoon,
      (timeOfDay - 0.25) / 0.25
    );
    interpolatedIntensity = interpolateValue(
      intensities.morning,
      intensities.afternoon,
      (timeOfDay - 0.25) / 0.25
    );
    interpolatedFirelightIntensity = 0.0; // Fogata apagada durante el día
  } else if (timeOfDay <= 0.75) {
    // De tarde a anochecer
    interpolatedColor = interpolateColor(
      colors.afternoon,
      colors.dawn,
      (timeOfDay - 0.5) / 0.25
    );
    interpolatedIntensity = interpolateValue(
      intensities.afternoon,
      intensities.dawn,
      (timeOfDay - 0.5) / 0.25
    );
    interpolatedFirelightIntensity = interpolateValue(
      0.0,
      1.0,
      (timeOfDay - 0.5) / 0.25
    ); // Fogata encendiéndose al anochecer
    if (timeOfDay >= 0.72) hasStars = true;
  } else {
    // De anochecer a noche
    interpolatedColor = interpolateColor(
      colors.dawn,
      colors.night,
      (timeOfDay - 0.75) / 0.25
    );
    interpolatedIntensity = interpolateValue(
      intensities.dawn,
      intensities.night,
      (timeOfDay - 0.75) / 0.25
    );
    interpolatedFirelightIntensity = 1.0; // Fogata encendida durante la noche
    hasStars = true;
  }
  const backgroundColor = colorToRgbString(interpolatedColor);
  console.log(interpolatedIntensity);
  return (
    <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={false} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      zoom={1} // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[-Math.PI / 8, 0]} // Vertical limits
      azimuth={[-Math.PI / 4, Math.PI / 4]} // Horizontal limits
      config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
    >
      <Scene
        intensity={interpolatedIntensity}
        fire={interpolatedFirelightIntensity}
        hasStars={hasStars}
      />
    </PresentationControls>
  );
}
