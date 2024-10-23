import {
    ADD_ROUTE,
    ADMIN_ROUTE,
    CREATE_ADD,
    FAVOURITES_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    MAIN_ROUTE,
    BLOG_ROUTE,
    ABOUT_US_ROUTE,
    PHOTO_GALLERY_ROUTE, PLACES_ROUTE, ADD_CHECKED_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import AddPage from "./pages/AddPage";
import Favourites from "./pages/Favourites";
import CreateAdd from "./pages/CreateAdd"
import Main from "./pages/Main";
import Blog from "./pages/Blog"
import AboutUs from "./pages/AboutUs";
import PhotoGallery from "./pages/PhotoGallery"
import Places from "./pages/Places";
import PlacePage from "./pages/PlacePage";
import AdminAddsCheck from "./pages/AdminAddsCheck";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: FAVOURITES_ROUTE,
        Component: Favourites
    },
    {
        path: CREATE_ADD,
        Component: CreateAdd
    },
    {
        path: ADD_CHECKED_ROUTE,
        Component: AdminAddsCheck
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ADD_ROUTE + "/:id",
        Component: AddPage
    },
    {
        path: PROFILE_ROUTE + "/:id",
        Component: Profile
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: BLOG_ROUTE,
        Component: Blog
    },
    {
        path: ABOUT_US_ROUTE,
        Component: AboutUs
    },
    {
        path: PHOTO_GALLERY_ROUTE,
        Component: PhotoGallery
    },
    {
        path: PLACES_ROUTE,
        Component: Places
    },
    {
        path: PLACES_ROUTE + "/:id",
        Component: PlacePage
    }
]