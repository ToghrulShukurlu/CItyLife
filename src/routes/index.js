import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/account",
        element: <AccountPage />,
    }
]);