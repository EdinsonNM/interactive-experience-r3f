import { useEffect, useState } from "react";
import { LayoutContext } from "./layout.context";
import Steps from "../components/steps/steps";
import { useLocation, useNavigate } from "react-router-dom";

export default function LayoutProvider({ children }) {
  const [page, setPage] = useState(0);
  const onNextPage = () => setPage(page + 1);
  const onPreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };
  const location = useLocation();
  useEffect(() => {
    if (!location.pathname.includes("/page-")) {
      setPage(0);
    }
  }, [location]);
  return (
    <LayoutContext.Provider
      value={{ page, onNextPage, onPreviousPage, setPage }}
    >
      {children}
      <Steps page={page} totalPages={25} />
    </LayoutContext.Provider>
  );
}
