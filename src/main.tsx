import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
// Nao modificar sem comunicar no grupo. 
// Mexer em ultimo caso!

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <section>
        <RouterProvider router={router} />
      </section>
    </Provider>
  </React.StrictMode>
)
