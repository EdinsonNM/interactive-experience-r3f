import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-gray-400 to-white">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
