import PeopleIcon from '@mui/icons-material/People';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';

export const mainNavbarItems = [
    {
        id: 0,
        icon: < PeopleIcon />,
        label: 'Login',
        route: 'login',
    },
    {
        id: 1,
        icon: <LocalGroceryStoreIcon/>,
        label: 'Store',
        route: 'store',
    },
    {
        id: 2,
        icon: <InfoIcon/>,
        label: 'About us',
        route: 'about',
    },
    {
        id: 3,
        icon: <HomeIcon/>,
        label: 'Home',
        route: 'home',
    },
    {
        id: 4,
        icon: <PhoneIcon/>,
        label: 'Contact',
        route: 'contact',
    },
]