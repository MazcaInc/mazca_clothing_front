import { useNavigate } from "react-router-dom";
import Mazca from "@assets/logos/MAZCA SVG WHITE.svg";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <nav
            className={
                "fixed transition-all transform duration-300 top-0 w-full bg-transparent backdrop-blur-sm h-24 items-center flex justify-center"
            }
        >
            <section className={"mx-10 flex"}>
                <div className="items-center flex ">
                    <img
                        className={
                            "w-52 transition-all duration-300 hover:scale-105 cursor-pointer items-center"
                        }
                        onClick={() => navigate("/")}
                        src={Mazca}
                        alt="Mazca"
                    />
                </div>
            </section>
        </nav>
    );
}
