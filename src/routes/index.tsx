import { createBrowserRouter, Router, Routes } from "react-router-dom";

import Slider from "../components/slideDepoimento/SliderDepoimento";
import Home from "../pages/home";
<<<<<<< HEAD
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
  
=======
import { LessonsTwo } from "../pages/lessonsTwo";
import { LessonsThree } from "../pages/lessonsThree ";
import { OnBoarding } from "../pages/Onboarding";
import { LessonsFour } from "../pages/lessonsFour";
import { Lessons } from "../pages/lessonsOne";

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
>>>>>>> 294d43f94b5a95405829d4b5013b02bbdc6c0d1e
