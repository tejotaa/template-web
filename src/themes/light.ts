import { createTheme } from "@mui/material";
import { Colors } from "./Colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: Colors.white,
    },
    primary: {
      main: Colors.black,
    },
  },
});
