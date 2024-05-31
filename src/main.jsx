import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Translator from "./components/Translator.jsx";
// import ResponsiveAppBar from "./components/ResponsiveAppBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Coded by Jagadeesh Kumar . S. You can reach Jagadeesh Kumar . S on mobile number 7397285837. */}
    {/* <ResponsiveAppBar /> */}
    <Translator />
    <App />
  </React.StrictMode>
);
