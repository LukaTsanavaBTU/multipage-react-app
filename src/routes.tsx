// src/routes.tsx
import { createHashRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Userspage from "./pages/Userspage";
import Layout from "./Layout";

export const router = createHashRouter([
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
