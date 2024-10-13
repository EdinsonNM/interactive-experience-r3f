import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Steps({ page, totalPages }) {
  const navigate = useNavigate();

  const onPreviousPage = () => navigate(`/page-${page - 1}`);
  const onNextPage = () => navigate(`/page-${page + 1}`);
  return (
    <>
      <ul className="fixed bottom-10 steps hidden xl:flex">
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            role="button"
            key={index}
            className={`step ${
              page > index ? "step-primary" : ""
            } cursor-pointer`}
            onClick={() => navigate(`/page-${index + 1}`)}
          ></li>
        ))}
      </ul>
      <div className="flex justify-between fixed bottom-10 w-full px-4 xl:hidden">
        <button
          className="btn-circle btn btn-md btn-warning"
          onClick={onPreviousPage}
          disabled={page === 1 || page === 0}
        >
          <MdArrowBackIosNew />
        </button>
        <button
          className="btn-circle btn btn-md btn-warning"
          onClick={onNextPage}
          disabled={page >= totalPages - 1 || page === 0}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </>
  );
}
