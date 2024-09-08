import Card from "@components/Generic/Card.tsx";
import blue from "@assets/clothes/blue.svg";
import backBlue from "@assets/clothes/blue back.svg";

export default function Colecoes() {
    return (
        <main className={"mt-32 gap-14 flex justify-center me-32"}>
            <Card
                classname={"bg-white p-2 rounded-[2rem] object-fit"}
                src={blue}
                alt={"fodasse"}
                hoverSrc={backBlue}
            />
        </main>
    );
}
