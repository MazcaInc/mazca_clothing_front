export default function Footer() {
    return (
        <footer
            className={
                "w-full absolute bottom-0 backdrop-blur-md flex bg-transparent"
            }
        >
            <div className={"w-full mx-10 my-12"}>
                <section className={"w-full"}>
                    <div>
                        <button
                            onClick={() =>
                                console.log(
                                    "Aparecer um pop-up de e-mail copiado"
                                )
                            }
                            className={
                                "text-2xl hover:text-pink-600 hover:scale-105 transition-all duration-300"
                            }
                        >
                            e-mail
                        </button>
                    </div>
                    <div>
                        <button
                            className={
                                "text-2xl hover:scale-105 transition-all hover:text-pink-600 duration-300"
                            }
                        >
                            faq
                        </button>
                    </div>
                    <div>
                        <button
                            className={
                                "text-2xl hover:scale-105 transition-all hover:text-pink-600 duration-300"
                            }
                        >
                            instagram
                        </button>
                    </div>
                    <div className={"flex !w-full justify-between"}>
                        <button
                            className={
                                "text-2xl hover:scale-105 transition-all hover:text-pink-600 duration-300"
                            }
                        >
                            x
                        </button>
                        <p className={"!text-center text-2xl"}>
                            todos os direitos reservados para a Mazca Clothing
                        </p>
                    </div>
                </section>
            </div>
        </footer>
    );
}
