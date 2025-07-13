import { createBrowserRouter, RouterProvider } from "react-router";
import '../index.css'
import Landing from "../pages/Landing";
import Browse from "../pages/Browse";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Landing />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]
)

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}
export default AppRouter;