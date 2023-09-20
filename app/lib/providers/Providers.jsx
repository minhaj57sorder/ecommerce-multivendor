"use client";
import { LogInUserContext } from "../contextpis/AuthContext";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Providers = ({ children }) => {
  const [logInUser, setLogInUser] = React.useState(null);
  return (
    <SessionProvider>
      <LogInUserContext.Provider value={{ logInUser, setLogInUser }}>
        {children}
      </LogInUserContext.Provider>
    </SessionProvider>
  );
};

export default Providers;
