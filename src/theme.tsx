import { PaletteMode } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const themeSettings = (mode: PaletteMode) => {
  if (mode === "light") {
    return {
      typography: {
        fontFamily: "Inter, sans-serif",
      },
      palette: {
        mode,
        primary: {
          main: "#436AB1",
        },
        secondary: {
          main: "#FFA500",
        },
        error: {
          main: red[500],
        },
        text: {
          primary: "#000", // Black for main text
          secondary: grey[600], // Lighter black/grey for subheadings
        },
      },
    };
  } else {
    // Dark mode configuration
    return {
      palette: {
        mode,
        primary: {
          main: "#1E88E5", // Different primary color for dark mode
        },
        secondary: {
          main: "#FF8F00", // Different secondary color for dark mode
        },
        error: {
          main: red[500],
        },
        text: {
          primary: "#fff", // White for main text in dark mode
          secondary: grey[300], // Lighter white/grey for subheadings in dark mode
        },
      },
    };
  }
};
