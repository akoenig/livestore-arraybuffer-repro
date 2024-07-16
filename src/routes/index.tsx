import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./home.tsx";
import { Project } from "./project.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Project />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
