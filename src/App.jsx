import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BookingPage from './pages/BookingPage/BookingPage'
import Info from './pages/Info/Info'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import {PlaysProvider} from '../../front/src/Providers/PlaysProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: async () => {
          return fetch('http://localhost:5002/play/getAllPlays') 
      }

      },
      
      {
        path: '/booking/:id',
        element: <BookingPage/>,
        loader: async ({params}) => {
          return fetch(`http://localhost:5002/play/getPlay/${params.id}`)
        }

      },

      {
        path: '/info/:id',
        element: <Info/>, 
        loader: ({params}) => {
          
          return fetch(`http://localhost:5002/play/getPlay/${params.id}`)
        }

      }
    
    ]

  },

  
  ]
  
  

)

const App = () => {
  return (
    <>
    <PlaysProvider>
      <RouterProvider router={router}/>
    </PlaysProvider>
    </>  
)}

export default App