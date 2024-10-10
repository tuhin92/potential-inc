import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Home from "./Home/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/about',
            // }
        ]
    },
]);

export default routes;