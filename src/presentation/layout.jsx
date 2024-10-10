import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LayoutProvider from "./layout.provider";

export default function Layout() {
  return (
    <main className="relative flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-400 to-white">
      <LayoutProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </LayoutProvider>
    </main>
  );
}
