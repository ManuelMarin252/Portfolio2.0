import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import CssBaseline from "@mui/material/CssBaseline";
const rootElement = document.getElementById("root");

// const colors = tokens(theme.palette.mode)
if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <CssBaseline />
      <App />
    </>,
  );
} else {
  console.error("Root element not found");
}
