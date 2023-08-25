import { createBrowserRouter } from "react-router-dom"
import { ComponentGrandChild } from "../Components/ComponentGrandChid"
import  ComponentOne  from "../Components/ComponentOne"
import { ComponentOneChild } from "../Components/ComponentOneChild"
import { ComponentTwo } from "../Components/ComponentTwo"
import { DashBoard } from "../Components/DashBoard"

const routes = [
    {
        path: "/",
        element: <DashBoard />,
        children: [
            {
                path: ":id",
                element: <ComponentOne />,
                children: [
                    {
                        path: "child",
                        element: <ComponentOneChild />,
                        children: [
                            {
                                path: "GrandChild",
                                element: <ComponentGrandChild />
                            },
                        ]
                    },
                ]
            },
            {
                path: "2",
                element: <ComponentTwo />
            },
        ]
    },
];

export const router = createBrowserRouter(routes)