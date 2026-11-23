import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="settings-page page-enter">
      <header className="page-header">
        <div><div className="eyebrow">WORKSPACE / PREFERENCES</div><h1>Settings</h1><p>Manage your profile and workspace preferences.</p></div>
      </header>
      <section className="settings-list">
        <article className="panel settings-card">
          <span className="settings-icon blue-icon" aria-hidden="true">♙</span>
          <div><h2>Profile</h2><p>View your personal profile and account details.</p></div>
          <Link className="button button-secondary button-compact" to="/users/1">View profile <span aria-hidden="true">→</span></Link>
        </article>
        <article className="panel settings-card">
          <span className="settings-icon purple-icon" aria-hidden="true">♧</span>
          <div><h2>Team access</h2><p>Review and manage members in your workspace.</p></div>
          <Link className="button button-secondary button-compact" to="/users">Manage users <span aria-hidden="true">→</span></Link>
        </article>
        <article className="panel settings-card">
          <span className="settings-icon green-icon" aria-hidden="true">⌁</span>
          <div><h2>Notifications</h2><p>Workspace notifications are currently enabled.</p></div>
          <span className="settings-state"><span /> Enabled</span>
        </article>
      </section>
    </div>
  );
}

export default Settings;
