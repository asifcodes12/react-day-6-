import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login();
    navigate("/dashboard");
  }

  return (
    <main className="login-page">
      <section className="login-aside">
        <div className="login-brand"><span className="brand-mark">N</span><span>northstar<span className="brand-period">.</span></span></div>
        <div className="login-message"><span className="login-overline">YOUR WORKSPACE, IN FOCUS</span><h1>Good work starts with a clear view.</h1><p>Bring your team, insights, and day-to-day operations together in one thoughtfully designed space.</p></div>
        <span className="login-copyright">© 2026 Northstar Workspace</span>
      </section>
      <section className="login-content">
        <form className="login-card" onSubmit={handleLogin}>
          <div className="login-heading"><span className="eyebrow">WELCOME BACK</span><h2>Sign in to your account</h2><p>Enter your details to continue to your workspace.</p></div>
          <label htmlFor="email">Email address</label>
          <input id="email" type="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          <button className="button button-primary login-submit" type="submit">Sign in <span aria-hidden="true">→</span></button>
          <p className="login-note">Demo workspace: enter any valid email and password.</p>
        </form>
      </section>
    </main>
  );
}

export default Login;
