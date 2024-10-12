import Card from "@components/collections/Card.tsx";
import blue from "@assets/clothes/blue.svg";
import backBlue from "@assets/clothes/blue back.svg";

// TODO: criar uma constante para as coleções e renderizar elas aqui
export default function Collections() {
    return (
        <main className={"mt-32 gap-14 flex justify-center me-32"}>
            <Card
                src={blue}
                alt={"colocar alt da constante aqui"}
                hoverSrc={backBlue}
            />
        </main>
    );
}
