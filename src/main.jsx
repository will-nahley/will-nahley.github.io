import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Nav from "./Nav.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <App />
  </StrictMode>
);
