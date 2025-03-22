import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Register from "./components/register.jsx";
import Login from "./components/Login.jsx";
import Root from "./components/Root.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import Orders from "./components/Orders.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./components/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",

    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/oders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
