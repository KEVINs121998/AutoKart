import { createContext, useState } from "react";
import users from "../data/users";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const loggedUser = localStorage.getItem("loggedUser");

    return loggedUser ? JSON.parse(loggedUser) : null;
  });

  const registerUser = (userData) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || users;

    const emailExists = savedUsers.some(
      (u) => u.email === userData.email
    );

    if (emailExists) {
      return {
        success: false,
        message: "Email already registered",
      };
    }

    const newUser = {
      id: Date.now(),
      ...userData,
      role: "user",
    };

    savedUsers.push(newUser);

    localStorage.setItem("users", JSON.stringify(savedUsers));

    return {
      success: true,
      message: "Registration successful",
    };
  };

  const login = (email, password) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || users;

    const foundUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Invalid email or password",
      };
    }

    setUser(foundUser);

    localStorage.setItem(
      "loggedUser",
      JSON.stringify(foundUser)
    );

    return {
      success: true,
      user: foundUser,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;