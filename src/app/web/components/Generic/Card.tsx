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

    function handleDelay() {
        setTimeout(() => {
            setIsHovered(!isHovered);
        });
    }

    return (
        <div
            className={
                "text-center backdrop-blur-md hover:text-pink-600 hover:-translate-y-0.5 cursor-pointer transition-all duration-300 w-64 justify-center p-4 items-center bg-transparent border-transparent border-2 rounded-2xl hover:border-pink-600"
            }
        >
            <img
                src={isHovered ? hoverSrc : src}
                alt={alt}
                className={`${classname} transition-all transform duration-300`}
                onMouseEnter={handleDelay}
                onMouseLeave={handleDelay}
            />
            <div className={"pt-3"}>
                <p className={"text-2xl"}>Blue</p>
                <p className={"text-md"}>R$ XXX,XX</p>
                <p className={"text-lg"}>Em estoque</p>
            </div>
        </div>
    );
}
