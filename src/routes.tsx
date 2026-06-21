// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Userspage from "./pages/Userspage";
import Layout from "./Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Homepage />,
      },
      {
        path: "users", 
        element: <Userspage />,
      },
    ],
  },
]);
