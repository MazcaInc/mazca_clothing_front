import { useState } from "react";

interface HoverImageProps {
    src: string;
    hoverSrc: string;
    alt: string;
    classname?: string;
}

export default function Card({
    src,
    hoverSrc,
    alt,
    classname
}: HoverImageProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [fade, setFade] = useState(false);

    function handleDelay() {
        setFade(false);
        setTimeout(() => {
            setFade(true);
            setIsHovered(!isHovered);
        }, 200);
    }

    return (
        <div
            className={
                "text-center backdrop-blur-md hover:text-pink-600 hover:-translate-y-0.5 cursor-pointer transition-all duration-300 w-64 justify-center p-4 items-center bg-transparent border-transparent border-2 rounded-2xl hover:border-pink-600"
            }
        >
            <div
                className={
                    "w-full bg-white bg-opacity-75 backdrop-blur-md sexOnTheBeach rounded-2xl p-2 flex items-center"
                }
            >
                <img
                    src={isHovered ? hoverSrc : src}
                    alt={alt}
                    className={`${classname} ${fade ? "opacity-100 scale-100" : "opacity-95 scale-95"} transition-all transform duration-200`}
                    onMouseEnter={handleDelay}
                    onMouseLeave={handleDelay}
                />
            </div>
            <div className={"pt-3"}>
                <p className={"text-2xl"}>Blue</p>
                <p className={"text-md"}>R$ XXX,XX</p>
                <p className={"text-lg"}>Em estoque</p>
            </div>
        </div>
    );
}
