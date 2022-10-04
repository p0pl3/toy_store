import {createWebHistory, createRouter} from "vue-router";
import HomeView from "@/views/HomeView";
import ProductsCatalog from "@/views/ProductsCatalog";
import NewOrder from "@/views/NewOrder";
import ProductsCart from "@/views/ProductsCart";
import ProductView from "@/views/ProductView";
import ProfileView from "@/views/ProfileView";

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
    },
    {
        path: "/cart",
        name: "ProductsCart",
        component: ProductsCart,
    },
    {
        path: "/product",
        name: "ProductView",
        component: ProductView,
    },
    {
        path: "/profile",
        name: "ProfileView",
        component: ProfileView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;