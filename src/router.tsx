import Home from "@pages/home";
import About from "@pages/about";
import Contact from "@pages/contact";
import { createBrowserRouter } from "react-router";

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
