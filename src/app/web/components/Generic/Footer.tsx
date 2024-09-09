import { footerProperties } from "@constants/footer-properties.ts";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    return (
        <footer
            className={
                "w-full h-52 absolute bottom-0 transition-all overflow-hidden backdrop-blur-md bg-transparent"
            }
        >
            <div className={"w-full mx-10 my-12"}>
                <section
                    className={"w-full flex-col justify-end flex items-start"}
                >
                    {footerProperties.map((item, index) => (
                        <button
                            key={"footerButtonKey: " + index}
                            className={
                                "text-2xl hover:text-pink-600 hover:scale-105 transition-all duration-300"
                            }
                            onClick={() => {
                                if (item.navigate) {
                                    navigate(item.navigate);
                                } else if (item.action) {
                                    item.action();
                                }
                            }}
                        >
                            {item.title}
                        </button>
                    ))}
                </section>
            </div>
        </footer>
    );
}
