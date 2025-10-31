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
import ErrorPage from "../components/ErrorPage";
import AppLayout from "../components/AppLayout";
import RestaurantMenu from "../components/RestaurantMenu";
import { lazy, Suspense } from "react";


const About = lazy( () => import("../components/About"));

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
                element:<Suspense fallback={
                    <div className="body-container"><h1>Loading the page......</h1></div>
                }><About />
                </Suspense>
            }
        ],
        errorElement: <ErrorPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);