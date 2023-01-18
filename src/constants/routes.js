// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Categories from "../pages/Categories";
import NotFound from "../pages/NotFound";

// import categories
import Health from "../pages/Categories/Health";
import Business from "../pages/Categories/Business";
import Entertainment from "../pages/Categories/Entertainment";
import General from "../pages/Categories/General";
import Science from "../pages/Categories/Science";
import Sports from "../pages/Categories/Sports";
import Technology from "../pages/Categories/Technology";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "About",
  },
  {
    path: "/categories",
    element: <Categories />,
    name: "Categories",
  },
  {
    path: "/health",
    element: <Health />,
    name: "Health",
  },
  {
    path: "/business",
    element: <Business />,
    name: "Business",
  },
  {
    path: "/entartainment",
    element: <Entertainment />,
    name: "Entertainment",
  },
  {
    path: "/general",
    element: <General />,
    name: "General",
  },
  {
    path: "/science",
    element: <Science />,
    name: "Science",
  },
  {
    path: "/sports",
    element: <Sports />,
    name: "Sports",
  },
  {
    path: "/technology",
    element: <Technology />,
    name: "Technology",
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
