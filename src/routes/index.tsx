import { createBrowserRouter, Router, Routes } from "react-router-dom";

import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
import ListaDeLicoes from "../pages/listaDeLicoes";
import { LessonsTwo } from "../pages/lessonsTwo";
import { LessonsThree } from "../pages/lessonsThree ";
import { OnBoarding } from "../pages/Onboarding";
import { LessonsFour } from "../pages/lessonsFour";
import { Lessons } from "../pages/lessonsOne";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { NewPassword } from "../pages/NewPassword";
import { RecoverPassword } from "../pages/RecoverPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/recoverpassword",
    element: <RecoverPassword />,
  },
  {
    path: "/newpassword",
    element: <NewPassword />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
  {
    path: "/lessons/1",
    element: <Lessons />,
  },
  {
    path: "/lessons/2",
    element: <LessonsTwo />,
  },
  {
    path: "/lessons/3",
    element: <LessonsThree />,
  },
  {
    path: "/lessons/4",
    element: <LessonsFour />,
  },
  {
    path: "/listadelicoes",
    element: <ListaDeLicoes />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },

]);

export default router;
