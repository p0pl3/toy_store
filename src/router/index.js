import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView";
import ProductsCatalog from "@/views/ProductsCatalog";
import NewOrder from "@/views/NewOrder";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/catalog",
        name: "ProductsCatalog",
        component: ProductsCatalog,
    },
    {
        path: "/new_order",
        name: "NewOrder",
        component: NewOrder,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;