import { createBrowserRouter } from "react-router-dom";
import Aulas from "../components/aulas/Aulas";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
import { LessonsTwo } from "../pages/lessonsTwo";
import { LessonsThree } from "../pages/lessonsThree ";
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
    element: <LessonsTwo />,
  },
  {
    path: "/lessons/3",
    element: <LessonsThree />,
  },
]);

export default router;
