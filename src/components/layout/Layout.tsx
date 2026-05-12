import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E30613] selection:text-white">
      <Header />
      <main className="flex-1 w-full bg-transparent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
