import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Root from './layout/Root.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import Follow from './Component/Follow.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import AuthProvider from './context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-lemon-chi.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'addCoffee',
        Component: AddCoffee
      },

      {
        path: 'updateCoffee/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-lemon-chi.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'follow',
        Component: Follow
      },

      {
        path: 'coffeeDetails/:id',
        loader: ({ params }) => fetch(`https://coffee-store-server-lemon-chi.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails
      },

      {
        path: 'signin',
        Component: SignIn

      },
      {
        path: 'signup',
        Component: SignUp
      }



    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>



  </StrictMode>,
)
