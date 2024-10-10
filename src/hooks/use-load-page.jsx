import { useContext, useEffect } from "react";
import { LayoutContext } from "../presentation/layout.context";

export default function useLoadPage(page) {
  const { setPage } = useContext(LayoutContext);
  useEffect(() => {
    setPage(page);
  }, []);
}
