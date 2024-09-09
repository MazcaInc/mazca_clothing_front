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
                    {navbarProperties.map((item, index) => (
                        <button
                            className={
                                "hover:text-pink-600 transition-all duration-300 hover:scale-105"
                            }
                            key={"buttonKey " + index}
                            onClick={() => navigate(item.navigate)}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </section>
        </nav>
    );
}
