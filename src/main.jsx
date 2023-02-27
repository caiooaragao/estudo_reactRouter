import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './routes/Home'
import Contact from './routes/Contact'
import ErrorPage from './routes/ErrorPage'
// 1- confiurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ContactDetails from './routes/ContactDetails'

/* 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/contact",
    element: <Contact />
  }

])
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/contact/:id",
        element: <ContactDetails />

      }
    ]
  }


])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
