import { useNavigate } from "react-router-dom";
import Mazca from "@assets/logos/MAZCA SVG WHITE.svg";
import { navbarProperties } from "@constants/navbar-properties.ts";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav
            className={
                "fixed transition-all transform duration-300 top-0 w-full bg-transparent backdrop-blur-sm h-24 items-center flex"
            }
        >
            <section className={"mx-10 flex w-full"}>
                <div className={"justify-start"}>
                    <img
                        className={
                            "w-52 transition-all duration-300 hover:scale-105 cursor-pointer"
                        }
                        onClick={() => navigate("/")}
                        src={Mazca}
                        alt="Mazca"
                    />
                </div>
                <div className={"flex gap-10 w-full justify-end"}>
                    <ul className={"flex gap-10 list-none p-0"}>
                        {navbarProperties.map((item, index) => (
                            <li key={"listKey " + index}>
                                <button
                                    className={
                                        "hover:text-pink-600 transition-all duration-300 hover:scale-105"
                                    }
                                    onClick={() => navigate(item.navigate)}
                                    role="link"
                                    tabIndex={0}
                                    aria-label={`Navegar para ${item.title}`}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </nav>
    );
}
