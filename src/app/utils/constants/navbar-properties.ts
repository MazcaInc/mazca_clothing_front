import INavbar from "@interfaces/constants/INavbar.ts";
import Mazca from "@assets/logos/MAZCA SVG WHITE.svg";

export const navbarProperties: INavbar[] = [
    {
        id: 1,
        navigate: "/",
        imgSource: Mazca
    },
    {
        id: 2,
        title: "Catálogo",
        navigate: "/Catalogo"
    },
    {
        id: 3,
        title: "Novidades",
        navigate: "/Novidades"
    },
    {
        id: 4,
        title: "Login",
        navigate: "/Login"
    }
];
