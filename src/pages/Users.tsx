import { useState } from "react";
import { Link } from "react-router-dom";
import { useUsers } from "../UserContext";

function Users() {
  const { users } = useUsers();
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="users-page page-enter">
      <header className="page-header users-header">
        <div><div className="eyebrow">WORKSPACE / PEOPLE</div><h1>Users</h1><p>Manage your team and their workspace access.</p></div>
        <Link className="button button-primary" to="/users/new"><span aria-hidden="true">＋</span> Add user</Link>
      </header>

      <section className="user-summary">
        <div><span className="summary-label">TOTAL TEAM MEMBERS</span><strong>{users.length.toLocaleString()}</strong><small>People in your workspace</small></div>
        <span className="summary-icon" aria-hidden="true">♙</span>
      </section>

      <section className="panel users-table-panel">
        <div className="panel-heading users-table-heading">
          <div><h2>All users</h2><p>{filteredUsers.length} {filteredUsers.length === 1 ? "person" : "people"}</p></div>
          <label className="search-field"><span aria-hidden="true">⌕</span><input aria-label="Search users" type="search" placeholder="Search users..." value={search} onChange={(event) => setSearch(event.target.value)} /></label>
        </div>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>NAME</th><th>EMAIL ADDRESS</th><th>ROLE</th><th>STATUS</th><th><span className="sr-only">Action</span></th></tr></thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td><Link className="table-user" to={`/users/${user.id}`}><span className="table-avatar">{user.name.split(" ").map((part) => part[0]).join("")}</span>{user.name}</Link></td>
                  <td className="muted-cell">{user.email}</td>
                  <td>{user.role}</td>
                  <td><span className={`status ${user.status.toLowerCase()}`}>{user.status}</span></td>
                  <td><Link className="text-link" to={`/users/${user.id}`}>View profile <span aria-hidden="true">→</span></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredUsers.length === 0 && <p className="empty-state">No users match “{search}”. Try another search.</p>}
        </div>
      </section>
    </div>
  );
}

export default Users;
