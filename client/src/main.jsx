import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Confirmation from './pages/Confirmation.jsx'
import Reservation from './pages/Reservation.jsx'
import Confirmed from './pages/Confirmed.jsx'
import Dashboard from './pages/DashBoard.jsx'
import Hotels from './pages/Hotels.jsx';
import Amar from './pages/Amar.jsx';
import Cfc from './pages/Cfc.jsx';
import Marineroom from './pages/Marineroom.jsx';
import RoyalCafe from './pages/RoyalCafe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Hotels/>,
        },
        {
            path: "/amar",
            element: <Amar/>
        },
        {
            path: "/cfc",
            element: <Cfc/>,
        },
        {
            path: "/marineroom",
            element: <Marineroom/>,
        },
        {
            path: "/royalcafe",
            element: <RoyalCafe/>,
        },
        {
            path: "/reservation/:id",
            element: <Reservation />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/confirmation/:id",
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
