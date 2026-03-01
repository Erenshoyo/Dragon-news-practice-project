import React from "react";
import { createBrowserRouter } from "react-router";
import Header from "../components/Header";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,

    hydrateFallbackElement: <Loading></Loading>,

    children: [
      {
        path: "/",
        Component: Home,
      },

      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/newsDetails/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
