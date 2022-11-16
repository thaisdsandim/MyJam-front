import { createBrowserRouter } from "react-router-dom";
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
]);

export default router;
