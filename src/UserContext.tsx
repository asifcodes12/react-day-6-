import { createContext, useContext, useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

type UserContextValue = {
  users: User[];
  addUser: (name: string, email: string) => User;
};

const initialUsers: User[] = [
  { id: 1, name: "Peter Parker", email: "peter@gmail.com", role: "Admin", status: "Active" },
  { id: 2, name: "John Smith", email: "john@gmail.com", role: "Editor", status: "Active" },
  { id: 3, name: "Ali Khan", email: "ali@gmail.com", role: "User", status: "Pending" },
  { id: 4, name: "Sarah Wilson", email: "sarah@gmail.com", role: "Editor", status: "Active" },
  { id: 5, name: "David Miller", email: "david@gmail.com", role: "User", status: "Pending" },
];

const UserContext = createContext<UserContextValue | null>(null);

function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    typeof value.id === "number" &&
    "name" in value &&
    typeof value.name === "string" &&
    "email" in value &&
    typeof value.email === "string" &&
    "role" in value &&
    typeof value.role === "string" &&
    "status" in value &&
    typeof value.status === "string"
  );
}

function loadUsers(): User[] {
  const storedUsers = localStorage.getItem("northstar.users");

  if (!storedUsers) {
    return initialUsers;
  }

  const parsedUsers: unknown = JSON.parse(storedUsers);

  if (!Array.isArray(parsedUsers) || !parsedUsers.every(isUser)) {
    throw new Error("Saved user data is invalid.");
  }

  return parsedUsers;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>(loadUsers);

  useEffect(() => {
    localStorage.setItem("northstar.users", JSON.stringify(users));
  }, [users]);

  function addUser(name: string, email: string) {
    const user: User = {
      id: Math.max(0, ...users.map((item) => item.id)) + 1,
      name,
      email,
      role: "User",
      status: "Active",
    };

    setUsers((currentUsers) => [...currentUsers, user]);
    return user;
  }

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
}

// The provider and its hook share this context module.
// eslint-disable-next-line react-refresh/only-export-components
export function useUsers() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUsers must be used inside UserProvider");
  }

  return context;
}
