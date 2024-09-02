import { navbarProperties } from "@constants/navbar-properties.ts";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div
            className={
                "fixed w-full backdrop-blur-md mt-2 h-12 border-b-2 border-dashed border-white items-center flex divide-dashed"
            }
        >
            <div className={"w-full justify-between flex mx-52"}>
                {navbarProperties.map((item) => (
                    <>
                        {item.imgSource ? (
                            <img
                                className={"w-40 mx-auto"}
                                src={item.imgSource}
                                onClick={() => navigate(item.navigate)}
                                alt={"image"}
                            />
                        ) : (
                            <button
                                key={"Navbar button key: " + item.id}
                                onClick={() => navigate(item.navigate)}
                                className={`w-32 tracking-widest border-4 text-lg hover:border-pink-600 transition-colors duration-300 border-dashed border-white py- px-3 rounded-xl`}
                            >
                                {item.title}
                            </button>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}
