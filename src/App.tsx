import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

const createBrowserRouterer = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/destination", element: <Destination /> },
    { path: "/crew", element: <Crew /> },
    { path: "/technology", element: <Technology /> },
  ]);
};

const App = () => {
  return <RouterProvider router={createBrowserRouterer()} />;
};

export default App;
