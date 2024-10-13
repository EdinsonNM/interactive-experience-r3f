import { useNavigate } from "react-router-dom";

export default function Steps({ page, totalPages }) {
  const navigate = useNavigate();

  return (
    <ul className="fixed bottom-10 steps">
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
  );
}
