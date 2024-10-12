import WhiteOwl from "@assets/logos/white_owl.svg";

export default function Home() {
    return (
        <div className="h-screen absolute -z-10 overflow-x-hidden flex-col items-center w-full flex">
            <div
                className="fixed pointer-events-none -top-72 -right-52 -z-10 w-[75rem] h-[75rem] bg-no-repeat bg-contain"
                style={{ backgroundImage: `url(${WhiteOwl})` }}
            />
            <main className="h-full mt-24">
                <h1>Bem-vindo à nossa loja</h1>
                <section>
                    {[...Array(40)].map((_, index) => (
                        <h2 key={index} className="text-xl">
                            Conteúdo {index + 1}
                        </h2>
                    ))}
                </section>
            </main>
        </div>
    );
}
