import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

async function start() {
  const outputs = await import("../amplify_outputs.json");

  Amplify.configure(outputs.default);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Authenticator>
        <App />
      </Authenticator>
    </React.StrictMode>
  );
}

start();