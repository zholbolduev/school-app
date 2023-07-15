import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globalStyles.scss";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./rootStore.ts";
import { Provider } from "react-redux";

const store = setupStore();
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
