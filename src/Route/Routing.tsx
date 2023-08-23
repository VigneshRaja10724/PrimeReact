import { ComponentOne } from "../Components/ComponentOne"
import { ComponentOneChild } from "../Components/ComponentOneChild"
import { ComponentTwo } from "../Components/ComponentTwo"
import { DashBoard } from "../Components/DashBoard"

export const routes = [
    {
        path: "/1",
        component: ComponentOne
    },
    {
        path: "/2",
        component: ComponentTwo
    },
    {
        path: "/child",
        component: ComponentOneChild
    },
    {
        path: "/",
        component: DashBoard
    }
]