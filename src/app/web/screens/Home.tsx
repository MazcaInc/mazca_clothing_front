// import WhiteOwl from "@assets/logos/white_owl.svg";

export default function Home() {
    return (
        <div className="h-screen absolute -z-10 overflow-x-hidden flex-col items-center w-full flex">
            <div
                className="fixed pointer-events-none -top-72 -z-10 w-[75rem] h-[75rem] bg-no-repeat bg-contain"
                // style={{ backgroundImage: `url(${WhiteOwl})` }}
            />
            <main className="h-full mt-96 text-4xl transition-all duration-300 hover:text-5xl hover:text-pink-600 cursor-default">
                <h1>Novidades em breve...</h1>
            </main>
        </div>
    );
}
