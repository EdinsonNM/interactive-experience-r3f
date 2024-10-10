import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Page01 from "./page-01/page-01";
import Page02 from "./page-02/page-02";
import Page03 from "./page-03/page-03";
import Page04 from "./page-04/page-04";
import Page05 from "./page-05/page-05";
import Page06 from "./page-06/page-06";
import Page07 from "./page-07/page-07";
import Page08 from "./page-08/page-08";
import Page09 from "./page-09/page-09";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/page-1",
        element: <Page01 />,
      },
      {
        path: "/page-2",
        element: <Page02 />,
      },
      {
        path: "/page-3",
        element: <Page03 />,
      },
      {
        path: "/page-4",
        element: <Page04 />,
      },
      {
        path: "/page-5",
        element: <Page05 />,
      },
      {
        path: "/page-6",
        element: <Page06 />,
      },
      {
        path: "/page-7",
        element: <Page07 />,
      },
      {
        path: "/page-8",
        element: <Page08 />,
      },
      {
        path: "/page-9",
        element: <Page09 />,
      },
    ],
  },
]);
