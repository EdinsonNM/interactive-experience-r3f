import useLoadPage from "../../hooks/use-load-page";
import { Overlay } from "../page-06/components/product-config/overlay";
import { ProductConfig } from "../page-06/components/product-config/product-config";
export default function Page06() {
  useLoadPage(6);
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-screen w-screen overflow-hidden">
      <ProductConfig />
      <Overlay />
    </div>
  );
}
