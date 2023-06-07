import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.tsx";
import "./index.css";
import { store } from "./core/store/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.querySelector("#root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
