import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";
import "./main.scss";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
