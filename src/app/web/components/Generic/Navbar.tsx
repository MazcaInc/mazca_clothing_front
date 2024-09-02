import { navbarProperties } from "@constants/navbar-properties.ts";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div
            className={
                "fixed w-full backdrop-blur-md mt-2 h-20 border-b-2 border-dashed border-white items-center flex divide-dashed"
            }
        >
            <div className={"w-full gap-52 justify-between flex mx-52"}>
                {navbarProperties.map((item) => (
                    <>
                        {item.imgSource ? (
                            <img
                                className={
                                    "w-40 mx-auto active:scale-95 cursor-pointer hover:scale-105 transition-all duration-300"
                                }
                                src={item.imgSource}
                                onClick={() => navigate(item.navigate)}
                                alt={"image"}
                            />
                        ) : (
                            <button
                                key={"Navbar button key: " + item.id}
                                onClick={() => navigate(item.navigate)}
                                className={`w-[134px] active:scale-95 h-12 hover:-translate-y-0.5 transform tracking-widest hover:border-8 border-4 text-lg hover:border-pink-600 transition-all duration-300 border-dashed border-white py- px-3 rounded-xl`}
                            >
                                <span className={"font-bold"}>
                                    {item.title?.charAt(0)}
                                </span>
                                {item.title?.substring(
                                    1,
                                    item.title?.length - 1
                                )}
                                <span className={"font-bold"}>
                                    {item.title?.charAt(item.title?.length - 1)}
                                </span>
                            </button>
                        )}
                    </>
                ))}
            </div>
        </div>
    );
}
