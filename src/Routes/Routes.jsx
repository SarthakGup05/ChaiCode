import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../pages/Home"
// import About from "../pages/About"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This should contain <Outlet />
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
])

export default router
