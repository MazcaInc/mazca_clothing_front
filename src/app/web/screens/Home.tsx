import WhiteOwl from "@assets/logos/white_owl.svg";

export default function Home() {
    return (
        <>
            <div
                className={
                    "h-screen relative pointer-events-none overflow-hidden flex-col items-center w-full flex"
                }
            >
                <div
                    className={
                        "flex justify-end w-full absolute top-0 -right-52 -z-10"
                    }
                >
                    <img className={"w-[75rem]"} src={WhiteOwl} alt="cu" />
                </div>
                <div className={"h-full mt-24"}>
                    <h1>Conteudo</h1>
                </div>
            </div>
        </>
    );
}
