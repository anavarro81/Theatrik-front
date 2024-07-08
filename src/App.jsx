import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './Pages/BookingPage/BookingPage'
import Info from './Pages/Info/Info'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import SearchResultsPage from './Pages/SearchResultsPage/SearchResultsPage'
import { PlaysProvider } from './Providers/PlaysProvider'
import '../src/css/main.css'


let url_base = "http://localhost:5002"

console.log('import.meta.env.MODE ', import.meta.env.MODE);

if (import.meta.env.MODE == 'production') {
  url_base = 'https://theatrik.vercel.app'

}

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

          // return fetch("http://localhost:5002/play/getAllPlays");
          return fetch(`${url_base}/play/getAllPlays`);
        },
      },

      {
        path: "/booking/:id",
        element: <BookingPage />,
        loader: async ({ params }) => {

          //return fetch(`http://localhost:5002/play/getPlay/${params.id}`);
          return fetch(`${url_base}/play/getPlay/${params.id}`);
        },
      },

      {
        path: "/info/:id",
        element: <Info />,
        loader: ({ params }) => {

          //return fetch(`http://localhost:5002/play/getPlay/${params.id}`);
          return fetch(`${url_base}/play/getPlay/${params.id}`);


        },
      },

      {

        path: "/search",
        element: <SearchResultsPage/>
      },

    ],
  },
]);

const App = () => {
  return (
    <>
        <div class='main'> 
        <PlaysProvider>
        <RouterProvider router={router} />
        </PlaysProvider>      
        </div>
      
    </>
  );
};

export default App;