import { StrictMode } from 'react'
import { HelmetProvider } from "react-helmet-async";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import DevicesDetails from './components/DeviceDetails/DevicesDetails.jsx';
import Cart from './components/Cart/Cart.jsx';
import Wishlist from './components/Wishlist/Wishlist.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // todo: error page
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'devices/:deviceId',
        element: <DevicesDetails />,
        loader: () => fetch('/data.json')
      },
      {
        path: 'statistics',
        element: <Statistics />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'wishlist',
        element: <Wishlist />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
