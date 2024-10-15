import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@components/general/Navbar.tsx";
import { lazy, Suspense } from "react";
import { LoadSpinner } from "@components/general/LoadSpinner.tsx";
import Footer from "@components/general/Footer.tsx";
const Home = lazy(() => import("@screens/Home.tsx"));

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense
                fallback={
                    <div
                        role="alert"
                        aria-live="assertive"
                        className="fixed flex-col inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800" // Exemplo de fundo opaco
                    >
                        <LoadSpinner />
                        <p className="mt-2 text-white">
                            Carregando, por favor aguarde...
                        </p>
                    </div>
                }
            >
                <Routes>
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
}
