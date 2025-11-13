import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Koi bhi email aur password accept karo
        // Bas password minimum 3 characters ka hona chahiye
        if (password.length >= 3) {
          const user = {
            id: Date.now(),
            email: email,
            name: email.split("@")[0], // Email ke first part se name banado
            role: "user",
            avatar: "/avatars/user.png",
          };

          setCurrentUser(user);
          localStorage.setItem("currentUser", JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error("Password must be at least 3 characters"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
