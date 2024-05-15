import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Auth from "../auth/Auth";
import Product from "../pages/product/Product";

const routes = [
    {
        path: "/",
        element: <Auth/>,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "/product",
                element: <Product />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />
    }
];

export default routes;
