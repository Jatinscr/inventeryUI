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

  // Pre-defined valid Gmail accounts with their passwords
  const validUsers = [
    { email: "jatin200336@gmail.com", password: "cdsncc88", name: "Jatin Sharma" },
    { email: "demo@gmail.com", password: "demo123", name: "Demo User" },
    { email: "admin@gmail.com", password: "admin123", name: "Admin User" },
    { email: "user@gmail.com", password: "user123", name: "Regular User" },
    { email: "rajesh@gmail.com", password: "rajesh123", name: "Rajesh Kumar" },
    { email: "priya@gmail.com", password: "priya123", name: "Priya Sharma" },
    { email: "amit@gmail.com", password: "amit123", name: "Amit Singh" },
    { email: "neha@gmail.com", password: "neha123", name: "Neha Patel" },
  ];

  // Gmail validation function
  const isValidGmail = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
  };

  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Step 1: Check if it's a valid Gmail format
        if (!isValidGmail(email)) {
          reject(
            new Error(
              "Only Gmail accounts are allowed (e.g., example@gmail.com)"
            )
          );
          return;
        }

        // Step 2: Check if this email exists in our valid users
        const userExists = validUsers.find((user) => user.email === email);

        if (!userExists) {
          reject(
            new Error(
              "This Gmail account is not registered. Please use a demo account."
            )
          );
          return;
        }

        // Step 3: Check if password matches
        if (userExists.password !== password) {
          reject(new Error("Incorrect password for this Gmail account"));
          return;
        }

        // Step 4: Login successful
        const user = {
          id: Date.now(),
          email: email,
          name: userExists.name,
          role: "user",
          avatar: "/avatars/user.png",
        };

        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const getDemoAccounts = () => {
    return validUsers;
  };

  const value = {
    currentUser,
    login,
    logout,
    loading,
    getDemoAccounts,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
