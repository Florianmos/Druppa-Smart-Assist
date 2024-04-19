import React, { createContext, useContext } from "react";
import Backend from "./backend";

const BackendContext = createContext<Backend>(null!);

export const BackendProvider: React.FunctionComponent<{
  children: React.ReactNode;
  value: Backend;
}> = ({ children, value }) => {
  return (
    <BackendContext.Provider value={value}>{children}</BackendContext.Provider>
  );
};

export function useBackend(): Backend {
  return useContext(BackendContext);
}
