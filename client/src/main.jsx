import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Hotelmodel from './pages/Hotelmodel.jsx'
import Login from './pages/Login.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Reservation from './pages/Reservation.jsx'
import Confirmed from './pages/Confirmed.jsx'
import Dashboard from './pages/DashBoard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/amar",
            element: <Hotelmodel />,
        },
        {
            path: "/reservation",
            element: <Reservation />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/confirmation",
            element: <Confirmation />,
        },
        {
            path: "/confirmed",
            element: <Confirmed />,
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
