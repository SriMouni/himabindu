import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ProfilePage from "../pages/profile/page";
import DirectoryPage from "../pages/schools/DirectoryPage";
import SchoolPage from "../pages/schools/SchoolPage";
import BlogIndex from "../pages/blog/BlogIndex";
import BlogPost from "../pages/blog/BlogPost";

const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/himabindu-rudrapaka", element: <ProfilePage /> },
  { path: "/schools-managed-by-himabindu-rudrapaka", element: <DirectoryPage /> },
  { path: "/schools/:slug", element: <SchoolPage /> },
  { path: "/blog", element: <BlogIndex /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
