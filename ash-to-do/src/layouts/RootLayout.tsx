import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export default function RootLayout() {
  return (
    <div
      className="flex w-screen h-screen"
      style={{
        backgroundColor: "var(--background)",
        backgroundImage: "radial-gradient(ellipse 100% 80% at 70% 0%, oklch(0.62 0.21 280 / 0.25), transparent)",
      }}
    >
      <nav className="flex-1">
        <Sidebar />
      </nav>
      <main className="flex-6 p-6 overflow-auto m-3 rounded-2xl border border-dashed border-border">
        <Outlet />
      </main>
    </div>
  );
}
