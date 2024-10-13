import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function Steps({ page, totalPages }) {
  const navigate = useNavigate();

  const onPreviousPage = () => navigate(`/page-${page - 1}`);
  const onNextPage = () => navigate(`/page-${page + 1}`);
  const options = [
    "Inicio",
    "Título",
    "Tu mundo virtual",
    "Presentación",
    "porqué aprender desarrollo web 3D",
    "Qué podemos hacer con Three JS",
    "Configurador de productos",
    "experiencias educativas",
    "Metaverso",
    "Realidad aumentada y realidad virtual",
    "Ejemplo Ar",
    "Juegos",
    "Qué es R3F",
    "Conceptos básicos",
    "Canvas",
    "Scene",
    "Geometry",
    "Material",
    "Mesh",
    "Y eso es todo",
    "Luces y sombras",
    "Particulas",
    "Colisiones",
    "Mas ejemplos",
    "Resumen",
    "Final",
  ];

  const onSelectPage = (page) => navigate(`/page-${page}`);
  return (
    <>
      {page >= 1 && (
        <div className="absolute top-0 left-0 w-[250px] h-full px-5 py-5">
          <select
            value={page}
            className="select select-bordered w-full max-w-xs bg-black/10 text-white"
            onChange={(e) => onSelectPage(e.target.value)}
          >
            <option disabled selected>
              Ver página
            </option>
            {options.map((option, index) => (
              <option key={index} value={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="flex justify-between fixed bottom-10 w-full px-4">
        <button
          className="btn-circle btn btn-md btn-warning"
          onClick={onPreviousPage}
          disabled={page === 1 || page === 0}
        >
          <MdArrowBackIosNew />
        </button>
        <div className="flex justify-center items-center">
          <span className="text-cyan-700 text-2xl font-bold">
            {page} / {totalPages}
          </span>
        </div>
        <button
          className="btn-circle btn btn-md btn-warning"
          onClick={onNextPage}
          disabled={page >= totalPages || page === 0}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </>
  );
}
