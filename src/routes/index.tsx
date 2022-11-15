import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import ListaDeLicoes from "../pages/listaDeLicoes";

const router = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/listadelicoes",
      element: <ListaDeLicoes />,
    },
  
  ]);
  
  export default router;
  