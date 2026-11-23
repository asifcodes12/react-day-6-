import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../UserContext";

function NewUser() {
  const { addUser } = useUsers();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const user = addUser(name.trim(), email.trim());
    navigate(`/users/${user.id}`);
  }

  return (
    <div className="page-enter">
      <header className="page-header users-header">
        <div><div className="eyebrow">WORKSPACE / PEOPLE / NEW</div><h1>Add a user</h1><p>Create a team profile and grant workspace access.</p></div>
        <Link className="button button-secondary" to="/users">Cancel</Link>
      </header>
      <section className="panel form-panel">
        <div className="form-intro"><span className="form-icon" aria-hidden="true">♙</span><div><h2>Personal details</h2><p>Enter the new team member’s information below.</p></div></div>
        <form className="user-form" onSubmit={handleSubmit}>
          <label htmlFor="user-name">Full name</label>
          <input id="user-name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Alex Morgan" required />
          <label htmlFor="user-email">Work email</label>
          <input id="user-email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@company.com" required />
          <div className="form-note">The new member will be added with the standard user role.</div>
          <button className="button button-primary" type="submit">Create user <span aria-hidden="true">→</span></button>
        </form>
      </section>
    </div>
  );
}

export default NewUser;
