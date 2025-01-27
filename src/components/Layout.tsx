import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div id="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
