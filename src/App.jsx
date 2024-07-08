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

  console.log('url_base >  ', url_base);

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
        // loader: async () => {
        //   console.log('url_base en el fetch = ', url_base);
        //   // return fetch("http://localhost:5002/play/getAllPlays");
        //   // return fetch(`${url_base}/play/getAllPlays`);
        //   return fetch("https://theatrik.vercel.app/play/getAllPlays");
          
        // },
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
        
        // loader: ({ params }) => {          
        //   //return fetch(`http://localhost:5002/play/getPlay/${params.id}`);
        //   return fetch(`${url_base}/play/getPlay/${params.id}`);


        // },

        loader: async ({params})=> {
    
          const resp = await fetch(`${url_base}/play/getPlay/${params.id}`)
          const plays = await resp.json()
          return plays    
          
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