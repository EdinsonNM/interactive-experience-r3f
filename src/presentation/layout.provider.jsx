import { useState } from "react";
import { LayoutContext } from "./layout.context";
import Steps from "../components/steps/steps";

export default function LayoutProvider({ children }) {
  const [page, setPage] = useState(1);
  const onNextPage = () => setPage(page + 1);
  const onPreviousPage = () => setPage(page - 1);
  return (
    <div className="relative w-screen h-screen">
      <LayoutContext.Provider
        value={{ page, onNextPage, onPreviousPage, setPage }}
      >
        {children}
        <Steps page={page} totalPages={20} />
      </LayoutContext.Provider>
    </div>
  );
}
