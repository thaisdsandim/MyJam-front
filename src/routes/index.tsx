import { createBrowserRouter } from "react-router-dom";
import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
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
    path: "/slider",
    element: <Slider />,
  },
]);

export default router;
