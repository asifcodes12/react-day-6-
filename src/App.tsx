
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import NewUser from "./pages/NewUser";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/new" element={<NewUser />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="/settings" element={<Settings />} />
              </Route>
            </Route>

            <Route path="*" element={<h1 className="not-found">404 - Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
