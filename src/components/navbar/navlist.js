import CommuteIcon from '@material-ui/icons/Commute';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PersonIcon from '@material-ui/icons/Person';

export const navlinks = [
    {
        name: "Объявления",
        href: "/",
        Icon: CommuteIcon
    },
    {
        name: "Добавить объявление",
        href: "/newpublication/",
        Icon: LocalTaxiIcon,
    },
    {
        name: "Профиль",
        href: "/profile/",
        Icon: PersonIcon,
    },
    {
        name: "Мои объявления",
        href: "/mypublications/",
        Icon: LoyaltyIcon,
    }
]