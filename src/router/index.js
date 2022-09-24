import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView";
import ProductsCatalog from "@/views/ProductsCatalog";
import ProductsCart from "@/views/ProductsCart";

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
        path: "/cart",
        name: "ProductsCart",
        component: ProductsCart,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;