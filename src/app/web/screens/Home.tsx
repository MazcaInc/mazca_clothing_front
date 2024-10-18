export default function Home() {
    return (
        <main className="h-screen w-full">
            <section className="h-full flex-wrap break-words flex text-center justify-center items-center text-4xl">
                <h1
                    className={
                        "flex flex-col transition-all duration-500 hover:scale-125 hover:text-pink-600 cursor-default"
                    }
                >
                    <span className={"text-6xl"}>Site em construção</span>
                    <span className={"text-4xl mt-2"}>
                        Novidades em breve...
                    </span>
                </h1>
            </section>
        </main>
    );
}
