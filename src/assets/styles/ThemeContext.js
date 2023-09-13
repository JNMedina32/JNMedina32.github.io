import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const lightTheme = {
    "--BG": "#edf1e6",
    "--mainText": "#124375",
    "--accent1": "#716574",
    "--accent2": "#702d41",
    "--accent": "#55757e",
    "--accent3": "#aa5a4e",
  };

  const darkTheme = {
    "--BG": "black",
    "--mainText": "#edf1e6",
    "--accent1": "#55757e",
    "--accent2": "#702d41",
    "--accent": "#aa5a4e",
    "--accent3": "#55757e",
  };

  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
  };

  useEffect(() => {
    const currentTheme = isLightTheme ? lightTheme : darkTheme;
    for (const [key, value] of Object.entries(currentTheme)) {
      document.body.style.setProperty(key, value);
    }
  }, [isLightTheme]);

  return (
    <ThemeContext.Provider value={{ theme: isLightTheme ? lightTheme : darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

