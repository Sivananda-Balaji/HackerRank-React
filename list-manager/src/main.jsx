import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyPolyfills, defineCustomElements } from "h8k-components/loader";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

applyPolyfills().then(() => {
  defineCustomElements(window);
});
