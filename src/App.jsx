import Footer from "./component/Footer/Footer";
import NavBarUp from "./component/Navbar/NavBarUp";
import Home from "./pages/Home/Home";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  
} from "react-router-dom";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Course from "./pages/course/Course";
import Teachers from "./pages/Teachers/Teachers";
import Favourite from "./pages/Favourite/Favourite";
import Students from "./pages/Students/Students";
import { fetchData,fetchDataTeacher,fetchDataStudent } from "./Api/Api";

const Layout = () => {
  return (
    <div>
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/Educational-Platform",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        loader:fetchData
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "course",
        element: <Course/>,
        loader:fetchData
      },
      {
        path: "teachers",
        element: <Teachers/>,
        loader:fetchDataTeacher
      },
      {
        path: "favourite",
        element: <Favourite/>,
      },
      {
        path: "students",
        element: <Students/>,
        loader:fetchDataStudent
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
