import { createContext, useState } from "react";
import usersData from "../data/users";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");

    return savedUsers ? JSON.parse(savedUsers) : usersData;
  });

  const [user, setUser] = useState(() => {
    const loggedUser = localStorage.getItem("loggedInUser");

    return loggedUser ? JSON.parse(loggedUser) : null;
  });

  // Register User
  const registerUser = (userData) => {
    const emailExists = users.some(
      (existingUser) =>
        existingUser.email.toLowerCase() ===
        userData.email.toLowerCase()
    );

    if (emailExists) {
      return {
        success: false,
        message: "Email already registered",
      };
    }

    const newUser = {
      id: Date.now(),
      name: userData.fname,
      address: userData.address,
      city: userData.city,
      email: userData.email,
      pno: userData.pno,
      password: userData.password,
      role: "user",
    };

    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    return {
      success: true,
      message: "Registration successful",
    };
  };

  // Login
  const login = (email, password) => {
    const foundUser = users.find(
      (existingUser) =>
        existingUser.email === email &&
        existingUser.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(foundUser);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify(foundUser)
    );

    return {
      success: true,
      user: foundUser,
    };
  };

  // Delete User
  const deleteUser = (id) => {
    const updatedUsers = users.filter(
      (existingUser) => existingUser.id !== id
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  // Change Role
  const changeUserRole = (id) => {
    const updatedUsers = users.map((existingUser) =>
      existingUser.id === id
        ? {
            ...existingUser,
            role:
              existingUser.role === "admin"
                ? "user"
                : "admin",
          }
        : existingUser
    );

    setUsers(updatedUsers);

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        registerUser,
        login,
        logout,
        deleteUser,
        changeUserRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;