import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './Pages/BookingPage/BookingPage'
import Info from './Pages/Info/Info'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'


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
          return fetch("http://localhost:5002/play/getAllPlays");
        },
      },

      {
        path: "/booking/:id",
        element: <BookingPage />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5002/play/getPlay/${params.id}`);
        },
      },

      {
        path: "/info/:id",
        element: <Info />,
        loader: ({ params }) => {
          return fetch(`http://localhost:5002/play/getPlay/${params.id}`);
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