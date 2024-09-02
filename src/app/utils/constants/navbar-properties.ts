import INavbar from "@interfaces/constants/INavbar.ts";
import Mazca from "@assets/logos/MAZCA SVG WHITE.svg";

export const navbarProperties: INavbar[] = [
    {
        id: 1,
        title: "Catálogo",
        navigate: "/Catalogo"
    },
    {
        id: 2,
        title: "Novidades",
        navigate: "/Novidades"
    },
    {
        id: 3,
        navigate: "/",
        imgSource: Mazca
    },
    {
        id: 4,
        title: "Promoções",
        navigate: "/Promocoes"
    },
    {
        id: 5,
        title: "Login",
        navigate: "/Login"
    }
];
