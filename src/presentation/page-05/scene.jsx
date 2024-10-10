import { CameraControls, Scroll, ScrollControls } from "@react-three/drei";
import Developer from "../page-01/components/developer";
import { useThree } from "@react-three/fiber";

export default function Scene() {
  const viewport = useThree((state) => state.viewport);

  return (
    <>
      <CameraControls />
      <ScrollControls pages={3}>
        <Scroll html>
          <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen text-cyan-700">
            <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10  text-center">
              Qué podemos hacer con Three JS ?
            </h1>
            <h2 className="text-2xl font-bold text-center text-gray-500">
              “Haciendo programación divertida”
            </h2>
          </div>

          <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen text-cyan-700">
            <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10  text-center">
              Configurador de productos
            </h1>
            <h2 className="text-2xl font-bold text-center text-gray-500 mx-auto max-w-4xl">
              “Un configurador de productos es una excelente manera de mostrar
              productos y permitir que los clientes los personalicen mientras
              visualizan en tiempo real el producto que obtendrán. ”
            </h2>{" "}
            <button className="btn btn-outline btn-info">Ejemplo</button>
          </div>

          <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen text-cyan-700">
            <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10  text-center">
              Experiencias Educativas
            </h1>
            <h2 className="text-2xl font-bold text-center text-gray-500 mx-auto max-w-4xl">
              “El uso de 3D en la educación está creciendo. Puede usarse para
              visualizar conceptos complejos y hacerlos más fáciles de entender.
              ”
            </h2>{" "}
            <button className="btn btn-outline btn-info">Ejemplo</button>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}
