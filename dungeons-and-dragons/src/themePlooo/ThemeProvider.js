import {
  CssBaseline,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import { useMemo } from "react";
import colorPalette from "./colorPalette";
import customShadows from "./customShadows";
import GlobalStyles from "./globalStyles";
import ComponentsOverrides from "./overrides";
import shadows from "./shadows";
import typography from "./typography";

const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette: colorPalette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
