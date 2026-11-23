
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Sidebar />
      <div className="workspace">
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="app-footer">
          <span>© 2026 Northstar</span>
          <span>Thoughtful tools for better teams</span>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
