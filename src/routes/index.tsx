import { createBrowserRouter } from "react-router-dom";
import Depoimentos from "../components/footerDepoimento/Depoimentos";

const router = createBrowserRouter([
    {
      path: "/depoimentos",
      element: <Depoimentos />,
    }
  
  ]);
  
  export default router;
  