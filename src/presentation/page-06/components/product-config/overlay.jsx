import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineHighlight } from "react-icons/ai";
import { useSnapshot } from "valtio";
import { state } from "./store";

export function Overlay() {
  const snap = useSnapshot(state);
  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: {
      x: -100,
      y: 100,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 100,
      opacity: 1,
      transition: { ...transition, delay: 0.5 },
    },
    exit: {
      x: -100,
      opacity: 0,
      y: 0,
      transition: { ...transition, delay: 0.5 },
    },
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full py-10 overflow-hidden">
      <AnimatePresence className="h-full">
        {snap.intro ? (
          <motion.section key="main" {...config} className="h-full">
            <div className="section--container">
              <motion.div
                key="title"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  damping: 5,
                  stiffness: 40,
                  restDelta: 0.001,
                  duration: 0.3,
                }}
              >
                <h1 className="text-6xl font-bold  whitespace-pre-wrap px-10  text-start">
                  Configurador de productos
                </h1>
              </motion.div>
              <div className="px-10">
                <motion.div
                  key="p"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 7,
                    stiffness: 30,
                    restDelta: 0.001,
                    duration: 0.6,
                    delay: 0.2,
                    delayChildren: 0.2,
                  }}
                >
                  <p className="text-2xl font-bold text-start text-white max-w-4xl  mt-10">
                    Un configurador de productos es una excelente manera de
                    mostrar productos y permitir que los clientes los
                    personalicen mientras visualizan en tiempo real el producto
                    que obtendrán.
                  </p>
                  <button
                    onClick={() => (state.intro = false)}
                    type="button"
                    className="mt-10 focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
                  >
                    Customizar
                    <AiOutlineHighlight size="1.3em" className="inline-block" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ) : (
          <motion.section key="custom" {...config}>
            <Customizer />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

function Customizer() {
  const snap = useSnapshot(state);
  return (
    <div className="relative w-full h-full flex flex-row justify-between">
      <div className="flex flex-col gap-4 items-end justify-center h-full px-10">
        {snap.colors.map((color) => (
          <div
            key={color}
            className="w-10 h-10 rounded-full cursor-pointer"
            style={{ background: color }}
            onClick={() => (state.color = color)}
          ></div>
        ))}
      </div>
      <div className="flex flex-col gap-4 items-end justify-end h-full px-10">
        <div className="flex flex-col gap-4 items-end justify-end h-full">
          {snap.decals.map((decal) => (
            <div
              key={decal}
              className={`cursor-pointer`}
              onClick={() => (state.decal = decal)}
            >
              <img src={`models/page-05/${decal}.png`} alt="brand" width="40" />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed right-10 bottom-10 ">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => (state.intro = true)}
        >
          GO BACK
          <AiOutlineArrowLeft size="1.3em" className="inline-block" />
        </button>
      </div>
    </div>
  );
}
