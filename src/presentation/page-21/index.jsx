import { Canvas } from "@react-three/fiber";
import useLoadPage from "../../hooks/use-load-page";
import Scene from "./scene";

export default function Page21() {
  useLoadPage(21);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden bg-gradient-to-t from-purple-950 to-cyan-900">
      <iframe
        src="https://edi-solar-system-r3f.netlify.app/"
        className="w-full h-full bg-black"
      ></iframe>
      <div className="absolute w-full h-full text-white flex flex-col justify-start  items-center pointer-events-none gap-8">
        <h1 className="md:text-6xl text-4xl font-bold  whitespace-pre-wrap px-10 max-w-4xl text-center text-white mt-10">
          Particulas
        </h1>
      </div>
    </div>
  );
}
