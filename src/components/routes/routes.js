import AdminPage from "../admin/AdminPage";
import Login from "../authorization/Login";
import Registration from "../authorization/Registration";
import CarDetail from "../cars/CarDetail";
import CreditPage from "../credit/CreditPage";
import UserCredits from "../credit/UserCredits";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import PublicationForm from "../publication/PublicationForm";
import PublicationsByCategory from "../publication/PublicationsByCategory";
import UserPublications from "../publication/UserPublications";

export const routes = [
    {
        path: "/",
        exact: true,
        strict: true,
        Component: Home,
    },
    {
        path: "/registration/",
        exact: true,
        strict: true,
        Component: Registration
    },
    {
        path: "/login/",
        exact: true,
        strict: true,
        Component: Login
    },
    {
        path: "/publication/:id/",
        exact: true,
        strict: true,
        Component: CarDetail,
    },
    {
        path: "/newpublication/",
        exact: true,
        strict: true,
        Component: PublicationForm,
    },
    {
        path: "/profile/",
        exact: true,
        strict: true,
        Component: Profile,
    },
    {
        path: "/admin/",
        exact: false,
        strict: false,
        Component: AdminPage,
    },
    {
        path: "/mypublications/",
        exact: true,
        strict: true,
        Component: UserPublications,
    },
    {
        path: "/publications/:name",
        exact: true,
        strict: true,
        Component: PublicationsByCategory,
    },
    {
        path: "/credit/:id/",
        exact: true,
        strict: true,
        Component: CreditPage,
    },
    {
        path: "/user/credits/",
        exact: true,
        strict: true,
        Component: UserCredits,
    },

]