import { createBrowserRouter } from "react-router-dom";
import Aulas from "../components/aulas/Aulas";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
import { Lessons } from "../pages/lessons";
import { OnBoarding } from "../pages/onboarding";

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
  {
    path: "/lessons/2",
    element: <Lessons />,
  },
]);

export default router;
