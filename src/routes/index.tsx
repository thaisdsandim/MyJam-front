import { createBrowserRouter } from "react-router-dom";
import Aulas from "../components/aulas/Aulas";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
import { OnBoarding } from "../pages/Onboarding";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
  {
    path: "/aula",
    element: <Aulas />,
  },
]);

export default router;
