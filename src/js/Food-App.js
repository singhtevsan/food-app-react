/*
Header
    -Logo
    -Nav Item
Body
    -Search
    -Restaurent Container
        -Restaurent Cards
Footer
    -Details
    -Links
    -Address
*/

import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "../components/About";
import ErrorPage from "../components/ErrorPage";
import AppLayout from "../components/AppLayout";
import RestaurantMenu from "../components/RestaurantMenu";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/about",
                element: <About />
            }
        ],
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);