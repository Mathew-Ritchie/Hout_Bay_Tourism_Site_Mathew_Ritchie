// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// --- MSW Integration (Conditional for Development) ---
async function enableMocking() {
  // Check if we are in a development environment
  // This environment variable is automatically set by Vite (and Create React App, etc.)
  if (process.env.NODE_ENV !== "development") {
    return; // Don't enable mocks in production builds
  }

  // Dynamically import the worker. This makes sure MSW code is not bundled in production.
  const { worker } = await import("./mocks/browser.js");
  // Start the service worker. 'onUnhandledRequest: 'bypass'' means requests
  // that don't match any handler will go through to the actual network.
  return worker.start({
    onUnhandledRequest: "bypass", // Options: 'bypass', 'warn', 'error'
  });
}

// Enable mocking, then render the React application
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
