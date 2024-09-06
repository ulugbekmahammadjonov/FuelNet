import { IRoute } from "@/types/types";
import { lazy } from "react";


const Columns = lazy(() => import("../pages/Columns"));
const Recording = lazy(() => import("../pages/Recording"));
const Reports = lazy(() => import("../pages/Reports"));
const Volumes = lazy(() => import("../pages/Volumes"));
const Settings = lazy(() => import("../pages/Settings"));


const routes: IRoute[] = [
   {
      path: "/",
      element: <Columns />,
   },
   {
      path: "/recording",
      element: <Recording />,
   },
   {
      path: "/reports",
      element: <Reports />,
   },
   {
      path: "/volumes",
      element: <Volumes />,
   },
   {
      path: "/settings",
      element: <Settings />,
   },
];

export default routes;
