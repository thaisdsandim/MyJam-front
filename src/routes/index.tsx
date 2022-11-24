import { createBrowserRouter, Router, Routes } from "react-router-dom";

import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
import { LessonsTwo } from "../pages/lessonsTwo";
import { LessonsThree } from "../pages/lessonsThree ";
import { OnBoarding } from "../pages/Onboarding";
import { LessonsFour } from "../pages/lessonsFour";
import { Lessons } from "../pages/lessonsOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/slider",
    element: <Slider />,
  },
]);

export default router;
