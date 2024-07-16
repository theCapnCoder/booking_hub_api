import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { store } from "./redux";
import App from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={2000} />
      <App />
    </Provider>
  </React.StrictMode>
);
