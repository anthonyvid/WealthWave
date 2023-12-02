import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./routes.jsx";
import { themeSettings } from "./theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function App() {
  const mode = useSelector((state) => state.authReducer.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
