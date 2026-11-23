import { Link, useParams } from "react-router-dom";
import { useUsers } from "../UserContext";

function UserDetails() {
  const { id } = useParams();
  const { users } = useUsers();
  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    return (
      <section className="panel empty-profile page-enter">
        <span className="empty-icon" aria-hidden="true">?</span>
        <h1>User not found</h1>
        <p>This user may have been removed or the link may be incorrect.</p>
        <Link className="button button-primary" to="/users">Back to users</Link>
      </section>
    );
  }

  const initials = user.name.split(" ").map((part) => part[0]).join("");

  return (
    <div className="user-details page-enter">
      <div className="eyebrow">WORKSPACE / PEOPLE / PROFILE</div>
      <header className="page-header details-header">
        <div><h1>User profile</h1><p>Team member details and access information.</p></div>
        <Link className="button button-secondary" to="/users"><span aria-hidden="true">←</span> Back to users</Link>
      </header>
      <section className="panel profile-card">
        <div className="profile-identity">
          <div className="profile-avatar">{initials}</div>
          <div><h2>{user.name}</h2><p>{user.email}</p></div>
          <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
        </div>
        <div className="profile-info">
          <div><span>User ID</span><strong>#{user.id.toString().padStart(4, "0")}</strong></div>
          <div><span>Role</span><strong>{user.role}</strong></div>
          <div><span>Email address</span><strong>{user.email}</strong></div>
          <div><span>Account status</span><strong>{user.status}</strong></div>
        </div>
      </section>
    </div>
  );
}

export default UserDetails;
