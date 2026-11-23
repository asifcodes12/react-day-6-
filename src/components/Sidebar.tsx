
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="sidebar">
      <NavLink className="brand" to="/dashboard" aria-label="Northstar home">
        <span className="brand-mark">N</span>
        <span>northstar<span className="brand-period">.</span></span>
      </NavLink>

      <div className="sidebar-label">WORKSPACE</div>
      <nav className="sidebar-nav" aria-label="Main navigation">
        <NavLink to="/dashboard"><span aria-hidden="true">▦</span> Overview</NavLink>
        <NavLink to="/users"><span aria-hidden="true">♙</span> Users</NavLink>
        <NavLink to="/settings"><span aria-hidden="true">⚙</span> Settings</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-profile">
          <div className="avatar avatar-small">PP</div>
          <div><strong>Peter Parker</strong><small>Administrator</small></div>
        </div>
        <button className="sidebar-logout" type="button" onClick={handleLogout}>
          <span aria-hidden="true">↪</span> Sign out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
