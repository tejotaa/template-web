import { createTheme } from "@mui/material";
import { Colors } from "./Colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: Colors.black,
    },
    primary: {
      main: Colors.white,
    },
  },
});
