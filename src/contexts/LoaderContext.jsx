import { createContext, useContext, useState } from "react";

// Creaiamo il contesto
const LoaderContext = createContext();

// Creiamo il componente provider che trasmetterà i dati ai compenti children
function LoaderProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}

// Custom hook per consumare il contesto
function useLoaderContext() {
  const context = useContext(LoaderContext);
  return context; // {isLoading, setIsLoading}
}

export { LoaderProvider, useLoaderContext };
