import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import World from "./world";
import useLoadPage from "../../hooks/use-load-page";
import { useState } from "react";
const worlds = [
  "https://sketchfab.com/models/1cba7c412a9e4eb9957b298d68649a90/embed",
  "https://sketchfab.com/models/946e7d496abd400fa028a719f8df3b04/embed",
  "https://sketchfab.com/models/68e64b0835424fef9d597191bd5cdd29/embed",
  "https://sketchfab.com/models/a433cf31672042da861e1b5b7a7a68bd/embed",
  "https://sketchfab.com/models/ac2c9f90c5b84080b85ca1c87c0ad6cc/embed",
];
export default function Page02() {
  const [world, setWorld] = useState(-1);
  useLoadPage(2);
  return (
    <>
      <Canvas
        className="w-full h-full"
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
      >
        <Scene />
      </Canvas>
      <div className="absolute w-full h-full text-cyan-700 flex flex-col justify-center items-center pointer-events-none">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold  whitespace-pre-wrap px-10 max-w-6xl text-center drop-shadow-lg">
            Si pudieran crear tu propio mundo virtual,
            <br />
            ¿Cómo se lo imaginan?
          </h1>
          <h2 className="text-lg md:text-2xl font-bold text-center text-black mt-10 drop-shadow-lg">
            “Permíteme mostrarte cómo abrir esa puerta
            <br /> con React y ThreeJS." ”
          </h2>
          <div className="flex flex-wrap gap-2 justify-center text-black mt-10">
            {worlds.map((world, index) => (
              <button
                key={index}
                onClick={() => setWorld(index)}
                className="btn btn-neutral pointer-events-auto btn-sm md:btn-md"
              >
                Mundo {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      {world !== -1 && (
        <div className="absolute w-full h-full">
          <div className="absolute bottom-14 right-4">
            <button className="btn btn-square " onClick={() => setWorld(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <World url={worlds[world]} />{" "}
        </div>
      )}
    </>
  );
}
