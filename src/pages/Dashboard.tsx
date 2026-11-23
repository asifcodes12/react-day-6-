import { Link } from "react-router-dom";
import { useUsers } from "../UserContext";

const bars = [40, 65, 45, 80, 55, 90, 70, 100, 60, 85, 50, 75];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Dashboard() {
  const { users } = useUsers();
  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date()).toUpperCase();

  return (
    <div className="dashboard page-enter">
      <header className="page-header dashboard-header">
        <div>
          <div className="eyebrow">{today}</div>
          <h1>Good morning, Peter <span aria-hidden="true">✦</span></h1>
          <p>Here’s what’s happening across your workspace today.</p>
        </div>
        <Link className="button button-primary" to="/users/new">
          <span aria-hidden="true">＋</span> Add a user
        </Link>
      </header>

      <section className="stats-grid" aria-label="Workspace metrics">
        <article className="stat-card">
          <div className="stat-top"><span>Total users</span><span className="stat-icon blue-icon">♙</span></div>
          <strong>{users.length.toLocaleString()}</strong>
          <small><span className="trend-up">↑ 12.5%</span> vs. last month</small>
        </article>
        <article className="stat-card">
          <div className="stat-top"><span>Total revenue</span><span className="stat-icon purple-icon">$</span></div>
          <strong>$45,890</strong>
          <small><span className="trend-up">↑ 8.2%</span> vs. last month</small>
        </article>
        <article className="stat-card">
          <div className="stat-top"><span>Total orders</span><span className="stat-icon orange-icon">▤</span></div>
          <strong>3,240</strong>
          <small><span className="trend-up">↑ 15.3%</span> vs. last month</small>
        </article>
        <article className="stat-card">
          <div className="stat-top"><span>Active sessions</span><span className="stat-icon green-icon">⌁</span></div>
          <strong>1,820</strong>
          <small><span className="trend-up">↑ 5.4%</span> vs. last month</small>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div><h2>Revenue analytics</h2><p>Monthly performance overview</p></div>
            <span className="period-label">This year <span aria-hidden="true">⌄</span></span>
          </div>
          <div className="chart" role="img" aria-label="Revenue trend over the last 12 months">
            {bars.map((height, index) => (
              <div className="bar-column" key={months[index]}>
                <div className="bar" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <div className="chart-labels">{months.map((month) => <span key={month}>{month}</span>)}</div>
        </article>

        <article className="panel activity-panel">
          <div className="panel-heading">
            <div><h2>Recent activity</h2><p>The latest from your team</p></div>
            <span className="live-indicator">Live</span>
          </div>
          <div className="activity-list">
            <div className="activity"><span className="activity-icon activity-blue">♙</span><div><strong>New user registered</strong><small>Peter Parker joined the team</small></div><time>2m</time></div>
            <div className="activity"><span className="activity-icon activity-purple">＄</span><div><strong>Payment received</strong><small>A payment of $250 was received</small></div><time>1h</time></div>
            <div className="activity"><span className="activity-icon activity-orange">▤</span><div><strong>New order placed</strong><small>Order #1024 was created</small></div><time>3h</time></div>
            <div className="activity"><span className="activity-icon activity-green">⚙</span><div><strong>Settings updated</strong><small>Workspace preferences changed</small></div><time>5h</time></div>
          </div>
        </article>
      </section>

      <section className="panel users-panel">
        <div className="panel-heading">
          <div><h2>Team members</h2><p>A quick look at your recently added users</p></div>
          <Link className="button button-secondary button-compact" to="/users">View all users <span aria-hidden="true">→</span></Link>
        </div>
        <div className="table-wrapper">
          <table>
            <thead><tr><th>NAME</th><th>EMAIL ADDRESS</th><th>ROLE</th><th>STATUS</th></tr></thead>
            <tbody>
              {users.slice(0, 4).map((user) => (
                <tr key={user.id}>
                  <td><Link className="table-user" to={`/users/${user.id}`}><span className="table-avatar">{user.name.split(" ").map((part) => part[0]).join("")}</span>{user.name}</Link></td>
                  <td className="muted-cell">{user.email}</td>
                  <td>{user.role}</td>
                  <td><span className={`status ${user.status.toLowerCase()}`}>{user.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
