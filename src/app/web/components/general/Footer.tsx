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
                <nav aria-label="Rodapé de navegação">
                    <ul
                        className={
                            "flex-col justify-end flex items-start list-none p-0"
                        }
                    >
                        {footerProperties.map((item, index) => (
                            <li key={"footerButtonKey: " + index}>
                                <button
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
                                    role="link"
                                    tabIndex={0}
                                    aria-label={item.title}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
}
