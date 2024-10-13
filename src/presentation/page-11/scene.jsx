import { Physics } from "@react-three/rapier";
import Paddle from "./components/paddle";
import Ball from "./components/ball";
import {
  EffectComposer,
  N8AO,
  TiltShift2,
  ToneMapping,
} from "@react-three/postprocessing";
import Bg from "./components/bg";
const ready = true;
export default function Scene() {
  return (
    <>
      <Bg />
      <ambientLight intensity={0.5 * Math.PI} />
      <spotLight
        decay={0}
        position={[-10, 15, -5]}
        angle={1}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
        shadow-bias={-0.0001}
      />
      <Physics gravity={[0, -40, 0]} timeStep="vary">
        {ready && <Ball position={[0, 5, 0]} />}
        <Paddle />
      </Physics>
      <EffectComposer disableNormalPass>
        <N8AO aoRadius={0.5} intensity={2} />
        <TiltShift2 blur={0.2} />
        <ToneMapping />
      </EffectComposer>
    </>
  );
}
