import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx";
import Contact from "./pages/contact/contact.tsx";
import { Navigate, createBrowserRouter, type RouteObject } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

type NamedRouteObject = RouteObject & {
  name: string;
};

export const routes: NamedRouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/quotes/list" replace />,
    name: "home",
  },
  {
    path: "/about",
    element: <About />,
    name: "about",
  },
  {
    path: "/contact",
    element: <Contact />,
    name: "contact",
  },
];
