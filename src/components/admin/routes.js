import BankTable from "./bank/BankTable"
import CarCreditTable from "./carCredits/CarCreditTable"
import CarModEdit from "./carMods/CarModEdit"
import CarModsTable from "./carMods/CarModsTable"
import CarEdit from "./cars/CarEdit"
import CarsTable from "./cars/CarsTable"
import CategoriesTable from "./categories/CategoriesTable"
import CategoryEdit from "./categories/CategoryEdit"
import PublicationEdit from "./publications/PublicationEdit"
import PublicationsTable from "./publications/PublicationsTable"
import ReportsTable from "./reports/ReportsTable"
import UsersTable from "./users/UsersTable"

export const routemap = [
    {
        exact: true,
        strict: true,
        path: '/admin/categories',
        Component: CategoriesTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/cars',
        Component: CarsTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/category/:id/',
        Component: CategoryEdit,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/cars/:id/',
        Component: CarEdit,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/carmods',
        Component: CarModsTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/carmods/:id/',
        Component: CarModEdit,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/publications',
        Component: PublicationsTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/publications/:id/',
        Component: PublicationEdit,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/users',
        Component: UsersTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/reports',
        Component: ReportsTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/banks',
        Component: BankTable,
    },
    {
        exact: true,
        strict: true,
        path: '/admin/car/credits',
        Component: CarCreditTable,
    }
]