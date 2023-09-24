import React, { useState, useMemo, createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const colorPalette = {
  yellow: "#FEDB57",
  darkyellow: "F2C20A",
  pink: "#F4AFA8",
  orange: "#D1460B",
  navy: "#0E569D",
  gray: "#5C5C5C",
  green: "#3EAC70",
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...colorPalette,
    ...(mode === "light"
      ? {
          // palette values for light mode
          background: {
            paperemphasis: colorPalette["yellow"],
          },

          text: {
            emphasis: colorPalette["navy"],
            secondary: colorPalette["gray"],
            pink: colorPalette["pink"]
          },
        }
      : {
          // palette values for dark mode
          background: {
            paperemphasis: colorPalette["darkyellow"],
          },
          text: {
            emphasis: colorPalette["navy"],
            secondary: "lightgray",
            pink: colorPalette["pink"]
          },
        }),
  },
});

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const PortfolioTheme = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default PortfolioTheme;
