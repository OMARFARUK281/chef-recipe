import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Home from "./pages/Home/Home";
import Chef_Foods from "./Layouts/Chef_Foods";
import Chef from "./pages/Chef/Chef";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: 'chef',
    element: <Chef_Foods></Chef_Foods>,
    children: [
      {
        path: ':id',
        element: <Chef></Chef>
      }
    ]
  }
])

export default router;