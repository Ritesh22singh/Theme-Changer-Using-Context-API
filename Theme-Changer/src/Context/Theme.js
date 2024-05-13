import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},

  // In createContext, we can pass both varibale as well as method like above
});

export const ThemeProvider = ThemeContext.Provider; // Here we are setting provider into varible

export default function useTheme() {
  return useContext(ThemeContext);

  // Create custom hook wehe we export useContext and ThemeContext
}
