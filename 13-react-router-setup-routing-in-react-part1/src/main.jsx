import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello "/"</h1>
  },
  {
    path: '/about',
    element: <h1>Hello "/about"</h1>
  },
  {
    path: '/blog',
    element: <h1>Hello "/blog"</h1>
  },
  {
    path: '/contact',
    element: <h1>Hello "/contact"</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
