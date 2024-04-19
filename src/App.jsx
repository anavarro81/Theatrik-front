import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookingPage from "./pages/BookingPage/BookingPage";
import Info from "./pages/Info/Info";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          return fetch("http://localhost:5004/play/getAllPlays");
        },
      },

      {
        path: "/booking/:id",
        element: <BookingPage />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5004/play/getPlay/${params.id}`);
        },
      },

      {
        path: "/info/:id",
        element: <Info />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5004/play/getPlay/${params.id}`);
        },
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
