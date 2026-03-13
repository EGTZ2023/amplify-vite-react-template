import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

async function start() {
  let outputs = {};

  try {
    outputs = (await import("../amplify_outputs.json")).default;
  } catch {
    console.warn("amplify_outputs.json not found during build");
  }

  Amplify.configure(outputs);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Authenticator>
        <App />
      </Authenticator>
    </React.StrictMode>
  );
}

start();