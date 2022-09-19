import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView";
import ProductsCatalog from "@/views/ProductsCatalog";

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;