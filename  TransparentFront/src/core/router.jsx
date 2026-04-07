import {createBrowserRouter} from "react-router-dom";
import Functions from "../ui/pages/functions.jsx";
import Info from "../ui/pages/info.jsx";

const routes = [
    {
        path: "/",
        element: <Functions />,
    },
    {
     path: "/info",
     element: <Info />,
    }
]
const roting = createBrowserRouter(routes);
export default roting;