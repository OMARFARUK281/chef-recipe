import { createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import Chef_Foods from "./Layouts/Chef_Foods";
import Chef from "./pages/Chef/Chef";
import ChefFood from "./pages/Home/ChefFood/ChefFood";
import LoginLayout from "./Layouts/LoginLayout";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Login/Register/Register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: 'chef',
    element: <Main></Main>,
    children: [
      
      {
        path: ':id',
        element: <Chef></Chef>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      }
    ]
  },
  {
    path: '/',
    element: <Chef_Foods></Chef_Foods>,
    children: [
      {
        path: '/:id',
        element: <ChefFood></ChefFood>
      }
    ]
  }
])

export default router;