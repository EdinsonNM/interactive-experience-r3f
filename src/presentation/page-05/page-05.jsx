import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import useLoadPage from "../../hooks/use-load-page";
import { Overlay } from "../page-06/components/product-config/overlay";
import { ProductConfig } from "../page-06/components/product-config/product-config";
export default function Page05() {
  useLoadPage(5);
  return (
    <>
      <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen text-cyan-700">
        <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10  text-center">
          Qué podemos hacer con Three JS ?
        </h1>
        <h2 className="text-2xl font-bold text-center text-gray-500">
          “Haciendo programación divertida”
        </h2>
      </div>
    </>
  );
}
