import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light"); // Here we use UseState hook to set themeMode

  function darkTheme() {
    setThemeMode("dark");
  }

  function lightTheme() {
    setThemeMode("light");
  }

  // In Above line we define Darkmode and lightMode function which is define in theme.js file
  // we can define heera also but u need to same name as define

  useEffect(() => {
    let theme = document.querySelector("html").classList;
    theme.remove("light", "dark");
    theme.add(themeMode);
  }, [themeMode]);

  // Here Used useEffect to remove and add theme to we can enable

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn></ThemeBtn>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
