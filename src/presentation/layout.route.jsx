import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Default } = await import("./page-00/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-1",
        lazy: async () => {
          const { default: Default } = await import("./page-01/page-01");
          return { Component: Default };
        },
      },
      {
        path: "/page-2",
        lazy: async () => {
          const { default: Default } = await import("./page-02/page-02");
          return { Component: Default };
        },
      },
      {
        path: "/page-3",
        lazy: async () => {
          const { default: Default } = await import("./page-03/page-03");
          return { Component: Default };
        },
      },
      {
        path: "/page-4",
        lazy: async () => {
          const { default: Default } = await import("./page-04/page-04");
          return { Component: Default };
        },
      },
      {
        path: "/page-5",
        lazy: async () => {
          const { default: Default } = await import("./page-05/page-05");
          return { Component: Default };
        },
      },
      {
        path: "/page-6",
        lazy: async () => {
          const { default: Default } = await import("./page-06/page-06");
          return { Component: Default };
        },
      },
      {
        path: "/page-7",
        lazy: async () => {
          const { default: Default } = await import("./page-07/page-07");
          return { Component: Default };
        },
      },
      {
        path: "/page-8",
        lazy: async () => {
          const { default: Default } = await import("./page-08/page-08");
          return { Component: Default };
        },
      },
      {
        path: "/page-9",
        lazy: async () => {
          const { default: Default } = await import("./page-09/page-09");
          return { Component: Default };
        },
      },
      {
        path: "/page-10",
        lazy: async () => {
          const { default: Default } = await import("./page-10/page-10");
          return { Component: Default };
        },
      },
      {
        path: "/page-11",
        lazy: async () => {
          const { default: Default } = await import("./page-11/page-11");
          return { Component: Default };
        },
      },
      {
        path: "/page-12",
        lazy: async () => {
          const { default: Default } = await import("./page-12/page-12");
          return { Component: Default };
        },
      },
      {
        path: "/page-13",
        lazy: async () => {
          const { default: Default } = await import("./page-13/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-14",
        lazy: async () => {
          const { default: Default } = await import("./page-14/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-15",
        lazy: async () => {
          const { default: Default } = await import("./page-15/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-16",
        lazy: async () => {
          const { default: Default } = await import("./page-16/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-17",
        lazy: async () => {
          const { default: Default } = await import("./page-17/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-18",
        lazy: async () => {
          const { default: Default } = await import("./page-18/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-19",
        lazy: async () => {
          const { default: Default } = await import("./page-19/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-20",
        lazy: async () => {
          const { default: Default } = await import("./page-20/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-21",
        lazy: async () => {
          const { default: Default } = await import("./page-21/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-22",
        lazy: async () => {
          const { default: Default } = await import("./page-22/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-23",
        lazy: async () => {
          const { default: Default } = await import("./page-23/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-24",
        lazy: async () => {
          const { default: Default } = await import("./page-24/index");
          return { Component: Default };
        },
      },
      {
        path: "/page-25",
        lazy: async () => {
          const { default: Default } = await import("./page-25/index");
          return { Component: Default };
        },
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);
