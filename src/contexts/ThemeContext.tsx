import { useLocalStorage } from "../hooks/useLocalStorage"; 
import { createContext, useContext, ReactNode } from "react"; 

//Props interface for the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode; // Children elements to be wrapped by the provider
}

//Context type for theme-related state and actions
interface ThemeContextType {
  theme: string; //Current theme "light" or "dark"  
  toggleTheme: () => void; //Function to toggle the theme
}

// Creating the ThemeContext with an initial undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Using the useLocalStorage hook to manage the theme state with persistence
  const [theme, setTheme] = useLocalStorage<string>("theme", "light");

  // Function to toggle the theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Returning the ThemeContext provider with the current theme and toggleTheme function
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context and access the current theme and toggle function
export const useTheme = (): ThemeContextType => {
  // Get the context value from the ThemeContext
  const context = useContext(ThemeContext);
  // If the context is undefined, throw an error
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context; // Return the context value
};
